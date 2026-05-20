 Laporan Hasil Praktikum: Final Project Aplikasi Berbasis Container

## Identitas Mahasiswa

- **Nama:** I Komang arya Triatmaja Duniarta 
- **NIM:** 2415354076
- **Kelas/Rombel:** TRPL D
- **Tanggal Praktikum:** 20 Mei 2026

---

## Teknologi & Tools yang Digunakan

- **Sistem Operasi:** Mac OS Ventura
- **Containerization:** Docker & Docker Hub
- **Bahasa Pemrograman / Framework:** Node.js
- **Tools Lain:** VS Code, Git, Postman

---

## Langkah-Langkah Praktikum & Dokumentasi

### Langkah 1: [Tulis Nama Langkah 1, Contoh: Membuat Dockerfile]

Pada langkah ini dibuat aplikasi backend sederhana menggunakan Node.js dan database MySQL. Seluruh service dikonfigurasi menggunakan Docker Compose agar backend dan database dapat berjalan dalam container terpisah.

```bash
# Contoh perintah terminal yang dijalankan

```bash
mkdir project-app
cd project-app
mkdir app
cd app
npm init -y
npm install express mysql2 dotenv
```

**Dokumentasi/Screenshot:**
![Proses Build Sukses](img/buat-folder.png)

---

### Langkah 2: Pengujian Docker Compose, Volume, Network, dan Container

Pada tahap ini dilakukan pengujian untuk memastikan seluruh service dapat berjalan menggunakan Docker Compose. Pengujian dilakukan dengan menjalankan container backend dan database, serta memastikan volume dan network berhasil dibuat otomatis oleh Docker.

Perintah yang digunakan:

```bash
docker compose up --build
docker ps
docker volume ls
docker network ls
```
**Dokumentasi/Screenshot:**
![Proses Build Sukses](img/pengujian.png)

### Langkah 3: [Tulis Nama Langkah 2, Contoh: Tag dan Push ke Docker Hub]

Setelah image berhasil dibuat, image backend diberi tag sesuai akun Docker Hub lalu di-push ke repository Docker Hub untuk menyimpan image secara online.
```bash
docker tag project-app-backend mangarya/user-service-app:v1.0
docker push mangarya/user-service-app:v1.0
```

**Dokumentasi/Screenshot:**
![Proses Push Berhasil](img/push-dockerhu.png)

---

### Langkah 4g: [Tulis Nama Langkah 3, Contoh: Pengujian Pull dan Run Container]

Setelah container berjalan, dilakukan pengujian endpoint API CRUD untuk memastikan aplikasi dapat menambahkan, menampilkan, mengubah, dan menghapus data user dari database MySQL.
```bash
curl http://localhost:3000/users
curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d "{\"name\":\"Arya\",\"email\":\"arya@gmail.com\"}"
curl -X PUT http://localhost:3000/users/7 -H "Content-Type: application/json" -d "{\"name\":\"Komang\",\"email\":\"komang@gmail.com\"}"
curl -X DELETE http://localhost:3000/users/8
```

**Dokumentasi/Screenshot:**
<img src="img/get.png" alt="Aplikasi Berjalan di Browser" width="500">
<img src="img/post.png" alt="Aplikasi Berjalan di Browser" width="500">
<img src="img/put.png" alt="Aplikasi Berjalan di Browser" width="500">
<img src="img/delete.png" alt="Aplikasi Berjalan di Browser" width="500">

---

## Kesimpulan

Praktikum final project berhasil dilakukan dengan membangun aplikasi berbasis container menggunakan Docker. Aplikasi backend Node.js berhasil terhubung dengan database MySQL menggunakan Docker Compose. Seluruh operasi CRUD (Create, Read, Update, Delete) dapat berjalan dengan baik melalui endpoint API. Kendala yang dialami adalah backend sempat gagal terhubung ke database karena MySQL belum siap, namun masalah dapat diatasi dengan melakukan restart container backend setelah database aktif."# final-project-docker2--2415354076-" 
