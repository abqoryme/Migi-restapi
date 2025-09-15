import axios from "axios";
import multer from "multer";
import sharp from "sharp";
import { createApiKeyMiddleware } from "../../middleware/apikey.js";

// Konfigurasi Multer untuk menangani upload file di memori
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // Batas ukuran file 10MB
});

/**
 * Fungsi inti untuk meningkatkan resolusi gambar menggunakan API fooocus.one.
 * @param {Buffer} buffer Buffer gambar (disarankan dalam format JPEG).
 * @param {number} scale Tingkat pembesaran (2-10).
 * @param {boolean} faceEnhance Mengaktifkan peningkatan wajah.
 * @returns {Promise<string>} URL gambar hasil upscale.
 */
async function upscaleImageApi(buffer, scale = 4, faceEnhance = true) {
  try {
    const base64Image = `data:image/jpeg;base64,${buffer.toString("base64")}`;

    // Memulai proses prediksi
    const start = await axios.post(
      "https://fooocus.one/api/predictions",
      {
        version: "f121d640bd286e1fdc67f9799164c1d5be36ff74576ee11c803ae5b665dd46aa",
        input: { face_enhance: faceEnhance, image: base64Image, scale },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Origin: "https://fooocus.one",
          Referer: "https://fooocus.one/id/apps/batch-upscale-image",
          "User-Agent": "Raol-APIs/2.0.0",
        },
      }
    );

    const predictionId = start.data?.data?.id;
    if (!predictionId) {
      throw new Error("Gagal mendapatkan ID prediksi dari API.");
    }

    let result;
    // Polling untuk mendapatkan hasil
    for (let i = 0; i < 20; i++) { // Maksimal polling 20 kali (sekitar 1 menit)
      const res = await axios.get(`https://fooocus.one/api/predictions/${predictionId}`, {
        headers: { 
          Referer: "https://fooocus.one/id/apps/batch-upscale-image",
          "User-Agent": "Raol-APIs/2.0.0",
        },
      });

      if (res.data.status === "succeeded") {
        result = res.data.output;
        break;
      } else if (res.data.status === "failed") {
        throw new Error("Proses upscale gagal di API eksternal.");
      }
      await new Promise((resolve) => setTimeout(resolve, 3000)); // Tunggu 3 detik
    }

    if (!result) {
      throw new Error("Proses upscale memakan waktu terlalu lama (timeout).");
    }

    return Array.isArray(result) ? result[0] : result;
  } catch (error) {
    console.error("Error dalam fungsi upscaleImageApi:", error.message);
    if (error.response) {
       throw new Error(`API eksternal merespon dengan status: ${error.response.status}`);
    }
    throw error;
  }
}

export default (app) => {
  app.post("/tool/upscale", createApiKeyMiddleware(), upload.single("image"), async (req, res) => {
    try {
      // Validasi: Pastikan file gambar diunggah
      if (!req.file) {
        return res.status(400).json({
          status: false,
          error: "Missing required parameter",
          message: "Parameter 'image' (file) diperlukan dalam form-data.",
        });
      }

      // Ambil dan validasi parameter dari body form-data
      let { scale, face_enhance } = req.body;

      let scaleNum = parseInt(scale, 10);
      if (isNaN(scaleNum) || scaleNum < 2 || scaleNum > 10) {
        scaleNum = 4; // Gunakan nilai default jika tidak valid
      }

      const faceEnhanceBool = face_enhance !== 'false'; // Default ke true

      // Konversi WebP ke JPEG jika perlu
      let imageBuffer = req.file.buffer;
      if (req.file.mimetype === "image/webp") {
        imageBuffer = await sharp(imageBuffer).jpeg().toBuffer();
      }
      
      // Panggil fungsi inti untuk upscale
      const resultUrl = await upscaleImageApi(imageBuffer, scaleNum, faceEnhanceBool);

      // Unduh gambar hasil upscale
      const imageResponse = await axios.get(resultUrl, {
        responseType: "arraybuffer",
        timeout: 60000,
        headers: {
          "User-Agent": "Raol-APIs/2.0.0",
        },
      });
      const finalImageBuffer = Buffer.from(imageResponse.data);

      // Kirim gambar sebagai respons
      res.setHeader("Content-Type", "image/jpeg");
      res.setHeader("Content-Length", finalImageBuffer.length);
      res.setHeader("Cache-Control", "public, max-age=3600");
      res.setHeader("Content-Disposition", `inline; filename="upscaled_${Date.now()}.jpg"`);
      res.end(finalImageBuffer);

    } catch (error) {
      console.error("Upscale API Endpoint Error:", error);
      res.status(500).json({
        status: false,
        error: "Image upscale failed",
        message: error.message || "Terjadi kesalahan internal saat memproses gambar.",
      });
    }
  });

  // Tambahkan endpoint lain di sini jika perlu
};