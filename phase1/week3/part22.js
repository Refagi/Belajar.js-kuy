/**API adalah singkatan dari Application Programming Interface. Secara sederhana, 
 * API adalah sekumpulan aturan dan protokol yang memungkinkan berbagai perangkat lunak atau aplikasi untuk 
 * berkomunikasi satu sama lain. API digunakan untuk mengizinkan berbagai komponen perangkat lunak berinteraksi 
 * dan bertukar data dengan cara yang terstruktur.

Berikut adalah beberapa konsep dasar terkait dengan API:

Komunikasi Antar Aplikasi: 
1.API memungkinkan satu aplikasi untuk berbicara dengan aplikasi lain. 
Ini memungkinkan aplikasi untuk meminta data atau layanan dari aplikasi lain atau mengirimkan data ke aplikasi lain.

2.Penyedia dan Pemanggil: 
Dalam konteks API, ada dua peran utama. "Penyedia API" adalah aplikasi atau layanan yang menyediakan akses 
ke fungsionalitas atau data tertentu. "Pemanggil API" adalah aplikasi yang menggunakan API untuk mengakses 
layanan atau data tersebut.

3.Endpoint: 
API memiliki titik akhir (endpoint) yang merupakan URL atau alamat di mana permintaan dapat dikirim. 
Setiap endpoint memiliki fungsi tertentu yang dapat dipanggil.

4.HTTP dan HTTPS: 
API sering digunakan dalam konteks protokol komunikasi HTTP (Hypertext Transfer Protocol) atau HTTPS (HTTP Secure). 
Ini berarti permintaan dan respons API dikirim melalui internet menggunakan protokol ini.

5.Metode HTTP: 
Metode HTTP seperti GET, POST, PUT, dan DELETE digunakan untuk mengakses atau memodifikasi data melalui API. 
GET digunakan untuk mengambil data, POST untuk mengirim data baru, PUT untuk memperbarui data, dan DELETE untuk 
menghapus data.

6.Format Data: 
Data yang dikirim melalui API biasanya di-format dalam format tertentu seperti JSON (JavaScript Object Notation) 
atau XML (eXtensible Markup Language). Format ini digunakan untuk mengemas data sehingga dapat dengan mudah dipahami 
oleh aplikasi penerima.

7.Autentikasi dan Otorisasi: 
API sering kali memiliki lapisan keamanan yang memerlukan autentikasi (mengidentifikasi pengguna) dan 
otorisasi (memberikan izin akses). Ini memastikan bahwa hanya pengguna yang sah yang dapat mengakses data atau 
layanan tertentu.

8.Rate Limiting: 
Beberapa API menerapkan pembatasan laju (rate limiting) untuk menghindari penggunaan berlebihan atau penyalahgunaan. 
Ini membatasi jumlah permintaan yang dapat dibuat dalam satu periode waktu tertentu.

API digunakan dalam berbagai konteks, termasuk pengembangan perangkat lunak, integrasi sistem, 
pengambilan data dari platform sosial media, dan banyak lagi. Mereka memungkinkan aplikasi untuk saling berinteraksi 
dan mengakses sumber daya eksternal dengan lebih efisien dan terstruktur. 




CONTOH PENGGUNAAN API
Dalam contoh ini, kita akan menggunakan Node.js untuk membuat permintaan HTTP ke API publik yang mengembalikan data 
cuaca berdasarkan lokasi yang diberikan. Untuk melakukan ini, kita akan menggunakan modul axios untuk mengirim 
permintaan HTTP. Pastikan Kalian telah menginstal modul ini dengan menjalankan npm install axios sebelum mencoba 
contoh berikut:*/

const axios = require('axios');

// URL endpoint API cuaca
const yugiohAPI = "https://db.ygoprodeck.com/api/v7/cardinfo.php?level=4&attribute=water&sort=atk"

// Membuat permintaan HTTP ke API cuaca
axios.get(yugiohAPI)
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    // Menampilkan pesan kesalahan jika permintaan gagal
    console.error('Kesalahan:', error);
  });

/*
Pastikan Kalian mengganti 'YOUR_API_KEY' dengan kunci API cuaca Kalian yang valid. Kalian dapat mendaftar untuk 
mendapatkan kunci API di situs web penyedia layanan cuaca seperti OpenWeatherMap.

Dalam contoh ini, kita menggunakan modul axios untuk membuat permintaan HTTP GET ke URL API cuaca dengan parameter 
kota dan kunci API. Setelah itu, kita menangani respons dari API dan mencetak data cuaca ke konsol.

Perhatikan bahwa ini hanya salah satu contoh penggunaan API dengan Node.js, dan ada banyak jenis API yang berbeda 
yang dapat Kalian akses dan gunakan dengan bahasa pemrograman ini. Kalian dapat menyesuaikan kode di atas sesuai 
dengan API yang Kalian ingin akses. */