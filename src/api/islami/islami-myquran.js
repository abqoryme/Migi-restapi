import axios from "axios";
import { createApiKeyMiddleware } from "../../middleware/apikey.js";

// Daftar domain API yang telah ditentukan sebelumnya.
// Anda bisa menambahkan lebih banyak di sini.
const apiDomains = {
  1: "api.myquran.com/v2",
  // Contoh: tambahkan domain lain
  // 2: "api.github.com"
};

export default (app) => {
  // Menggunakan app.all() untuk menangani semua metode HTTP (GET, POST, PUT, DELETE, dll.)
  app.all("/api/islami", createApiKeyMiddleware(), async (req, res) => {
    // Mengambil parameter dari query string untuk GET, atau dari body untuk metode lain (POST, PUT, dll.)
    const {
      api = 1,
      path = "/",
      ...params
    } = req.method === "GET" ? req.query : req.body;

    // Menentukan URL API target berdasarkan parameter 'api'
    const isCustomDomain = typeof api === "string" && api.includes(".");
    const apiUrl = isCustomDomain ? api : apiDomains[parseInt(api, 10)];

    if (!apiUrl) {
      return res.status(400).json({
        status: false,
        error: `Invalid API index. Use an index between 1-${Object.keys(apiDomains).length} or provide a valid custom domain.`,
      });
    }

    try {
      // Menyiapkan opsi untuk request menggunakan Axios
      const options = {
        method: req.method, // Menggunakan metode yang sama dari request asli
        url: `https://${apiUrl}${path}`,
        // Menempatkan parameter di `params` untuk GET atau di `data` untuk POST/PUT
        ...(req.method === "GET" ? { params } : { data: params }),
        headers: {
          // Menghapus header 'host' agar tidak konflik
          ...req.headers,
          host: new URL(`https://${apiUrl}`).host,
        }
      };
      
      delete options.headers['content-length']; // Axios akan mengatur ini secara otomatis

      // Melakukan panggilan ke API eksternal
      const apiResponse = await axios(options);

      // Mengirimkan kembali hasil dari API eksternal ke client
      res.status(apiResponse.status).json(apiResponse.data);

    } catch (error) {
      // Menangani error jika panggilan ke API eksternal gagal
      const status = error.response?.status || 500;
      const data = error.response?.data || {
        status: false,
        error: "Error calling external API",
        message: error.message,
      };
      res.status(status).json(data);
    }
  });
};