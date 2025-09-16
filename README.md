<p align="center"\>
<img src="https://migi-restapi.vercel.app/api/preview-image" alt="Migi API's Logo" width="120"\>
</p\>

<h1 align="center"\>Migi API's</h1\>

<p align="center"\>
<strong\>Modern API Documentation & Interactive Testing Interface</strong\>
<br\><br\>
<a href="[https://your-live-app.vercel.app](https://www.google.com/search?q=https://your-live-app.vercel.app)"\><strong\>Dokumentasi Live »</strong\></a\>
<br\><br\>
<img src="[https://img.shields.io/github/license/abqoryme/Migi-restapi?style=for-the-badge](https://www.google.com/search?q=https://img.shields.io/github/license/abqoryme/Migi-restapi%3Fstyle%3Dfor-the-badge)" alt="License"\>
<img src="[https://img.shields.io/github/stars/abqoryme/Migi-restapi?style=for-the-badge\&logo=github](https://www.google.com/search?q=https://img.shields.io/github/stars/abqoryme/Migi-restapi%3Fstyle%3Dfor-the-badge%26logo%3Dgithub)" alt="GitHub Stars"\>
<img src="[https://img.shields.io/github/forks/abqoryme/Migi-restapi?style=for-the-badge\&logo=github](https://www.google.com/search?q=https://img.shields.io/github/forks/abqoryme/Migi-restapi%3Fstyle%3Dfor-the-badge%26logo%3Dgithub)" alt="GitHub Forks"\>
</p\>

**API's Migi** adalah kumpulan API publik modern yang dikembangkan untuk kebutuhan edukasi, eksperimen, maupun integrasi ke dalam aplikasi. Proyek ini menyediakan berbagai *endpoint* dengan dokumentasi yang interaktif dan mudah digunakan.

-----

## 🚀 Fitur Utama

  - **✅ Dokumentasi Interaktif**: Akses dan uji coba *endpoint* langsung dari *browser* tanpa perlu aplikasi pihak ketiga.
  - **📚 Beragam Kategori API**: Mulai dari Islami, *Tools*, hingga *General API*.
  - **✨ Mudah Digunakan**: Respon berbentuk JSON yang terstruktur dan konsisten.
  - **🔓 *Open Source***: Bebas digunakan, dipelajari, dan dikembangkan lebih lanjut.

-----

## 📂 Struktur API

Berikut adalah beberapa contoh *endpoint* yang tersedia:

<details\>
<summary\><strong\>1. 🕌 Islami</strong\></summary\>
<br\>
API seputar Al-Qur’an, doa, dan referensi Islami.
<pre\><code\>/api/islami/quran/surah/:id → Ambil detail surah.
/api/islami/quran/ayat/:surah/:ayat → Ambil ayat tertentu.
/api/islami/quran/ayat/tema/:id → Ambil ayat berdasarkan tema.
/api/islami/doa/:id → Kumpulan doa harian.
</code\></pre\>
</details\>

<details\>
<summary\><strong\>2. 🛠️ Tools</strong\></summary\>
<br\>
API untuk kebutuhan konversi & utilitas.
<pre\><code\>/api/tools/shortlink?url= → Buat shortlink.
/api/tools/base64?text= → Encode/decode Base64.
/api/tools/qrcode?text= → Generate QR Code.
</code\></pre\>
</details\>

<details\>
<summary\><strong\>3. 🌐 General</strong\></summary\>
<br\>
API umum untuk hiburan & data publik.
<pre\><code\>/api/general/quotes → Random quotes inspiratif.
/api/general/jokes → Random jokes receh.
/api/general/anime/:id → Data anime.
</code\></pre\>
</details\>

-----

## 📦 Instalasi & Penggunaan Lokal

Untuk menjalankan proyek ini di mesin lokal Anda:

1.  **Clone repositori ini:**

    ```bash
    git clone https://github.com/abqoryme/Migi-restapi.git
    cd Migi-restapi
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Jalankan server pengembangan:**

    ```bash
    npm run dev
    ```

    API akan berjalan di `http://localhost:3000`.

-----

## 🔑 Contoh Penggunaan

**Request:**

```http
GET /api/islami/quran/ayat/tema/1
```

**Response:**

```json
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
```

-----

## 🌐 Deploy ke Vercel

Proyek ini dapat di-deploy dengan mudah menggunakan Vercel.

[](https://www.google.com/search?q=https://vercel.com/new/clone%3Frepository-url%3Dhttps%253A%252F%252Fgithub.com%252Fabqoryme%252FMigi-restapi)

API Anda akan langsung dapat diakses melalui `https://<your-app-name>.vercel.app/`.

-----

## 🤝 Kontribusi

Kontribusi sangat terbuka untuk siapa saja\! Jika Anda ingin membantu, silakan:

1.  *Fork* repositori ini.
2.  Buat *branch* baru (`feature/nama-fitur`).
3.  *Commit* perubahan Anda.
4.  Buat *Pull Request*.

-----

## 🛡️ Lisensi

Proyek ini dilisensikan di bawah **MIT License**. Lihat file `LICENSE` untuk detail lebih lanjut.

-----

## 👨‍💻 Kontak

[GitHub: @abqoryme](https://github.com/abqoryme) | Email: <a href="mailto:a.abqory@proton.me"\>a.abqory@proton.me</a\>

> ⚡ *“API ini dibuat dengan niat berbagi. Gunakan dengan bijak, jangan tembak server atuh kan sakit 🤭\!”*
