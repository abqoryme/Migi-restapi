📘 API's Migi

> Modern API Documentation & Interactive Testing Interface



API's Migi adalah kumpulan API publik modern yang dikembangkan untuk kebutuhan edukasi, eksperimen, maupun integrasi ke dalam aplikasi.
Proyek ini menyediakan berbagai endpoint dengan dokumentasi yang interaktif dan mudah digunakan.


---

🚀 Fitur Utama

✅ Dokumentasi Interaktif – akses langsung endpoint tanpa perlu aplikasi pihak ketiga.

✅ Beragam Kategori API – mulai dari Islami, Tools, hingga General API.

✅ Mudah Digunakan – respon berbentuk JSON terstruktur & konsisten.

✅ Open Source – bebas digunakan, dipelajari, dan dikembangkan lebih lanjut.



---

📂 Struktur API

1. Islami

API seputar Al-Qur’an, doa, dan referensi Islami.

/api/islami/quran/surah/:id → Ambil detail surah.

/api/islami/quran/ayat/:surah/:ayat → Ambil ayat tertentu.

/api/islami/quran/ayat/tema/:id → Ambil ayat berdasarkan tema.

/api/islami/doa/:id → Kumpulan doa harian.


2. Tools

API untuk kebutuhan konversi & utility.

/api/tools/shortlink?url= → Buat shortlink.

/api/tools/base64?text= → Encode/decode Base64.

/api/tools/qrcode?text= → Generate QR Code.


3. General

API umum untuk hiburan & data publik.

/api/general/quotes → Random quotes inspiratif.

/api/general/jokes → Random jokes receh.

/api/general/anime/:id → Data anime.



---

📦 Instalasi

Clone repo ini ke lokal:

git clone https://github.com/abqoryme/Migi-restapi.git
cd Migi-restapi

Install dependencies:

npm install

Jalankan server:

npm run dev

API akan berjalan di:

http://localhost:3000


---

🔑 Contoh Penggunaan

Request

GET /api/islami/quran/ayat/tema/1

Response

{
  "status": "success",
  "tema": {
    "id": "1",
    "name": "Tiga Golongan Manusia dalam Menyikapi Kebenaran"
  },
  "ayat": [
    {
      "surah": "Al-Baqarah",
      "ayat": 2,
      "teks": "ذَٰلِكَ الْكِتَابُ ..."
    }
  ]
}


---

🌐 Deploy

Proyek ini dapat dengan mudah di-deploy menggunakan Vercel atau Render.

Deploy ke Vercel

1. Fork repo ini.


2. Hubungkan repo ke Vercel.


3. Deploy dengan setting default.



API langsung bisa diakses via:

https://<your-app-name>.vercel.app/api


---

📖 Dokumentasi

Dokumentasi lengkap tersedia di:
👉 Migi API's Documentation


---

🤝 Kontribusi

Kontribusi sangat terbuka untuk siapa saja!

1. Fork repo.


2. Buat branch baru: feature/nama-fitur.


3. Commit perubahan.


4. Buat Pull Request.




---

🛡️ Lisensi

Proyek ini dilisensikan di bawah MIT License.
Bebas digunakan, dimodifikasi, dan dibagikan.


---

👨‍💻 Recoded

乃!ق𝕙!

💼 GitHub: @abqoryme

✉️ Email: a.abqory@proton.me



---

⚡ “API ini dibuat dengan niat berbagi. Gunakan dengan bijak, jangan tembak server atuh kan sakit 🤭!”


---
