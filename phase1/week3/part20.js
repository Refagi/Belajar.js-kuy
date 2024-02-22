/**
 * SQLite adalah sistem manajemen basis data (Database Management System - DBMS) yang berbasis file. 
 * Ini adalah salah satu jenis database yang sangat ringan dan relatif sederhana yang menghilangkan kebutuhan 
 * akan server basis data yang terpisah. SQLite digunakan secara luas dalam aplikasi desktop, perangkat mobile, 
 * dan bahkan dalam pengembangan web untuk mengelola dan menyimpan data.

Kenapa Kita Pakai SQLite:

1. Ringan dan Cepat: SQLite adalah database yang sangat ringan dan cepat karena bekerja secara lokal di dalam 
aplikasi tanpa memerlukan server terpisah. Hal ini menjadikannya pilihan yang baik untuk aplikasi berbasis sumber 
daya terbatas atau perangkat mobile.

2. Tidak Memerlukan Konfigurasi yang Rumit: SQLite tidak memerlukan konfigurasi server yang rumit seperti sistem 
manajemen basis data berbasis server lainnya. Ini membuatnya mudah diintegrasikan ke dalam aplikasi.

3. Transaksi ACID: SQLite mendukung transaksi yang aman (ACID - Atomicity, Consistency, Isolation, Durability), 
sehingga data kalian dapat dijamin keamanannya.

4. Dukungan Cross-Platform: SQLite tersedia di berbagai platform, termasuk Windows, macOS, Linux, Android, 
dan iOS, sehingga aplikasi kalian dapat berjalan di banyak lingkungan.

Database Transaction
Transaksi dalam SQLite merujuk kepada sekumpulan perintah SQL yang dieksekusi bersama-sama sebagai satu kesatuan 
yang tak dapat dibatalkan (atomic). Dalam konteks basis data, transaksi adalah operasi yang didefinisikan oleh 
satu atau beberapa perintah SQL yang, ketika dijalankan, entah semuanya berhasil dijalankan atau semuanya gagal, 
tanpa ada perubahan yang terekspos di antara keadaan awal dan akhir transaksi. Ini dikenal sebagai prinsip ACID, 
yang merupakan singkatan dari Atomicity, Consistency, Isolation, dan Durability.

Berikut penjelasan singkat tentang setiap komponen prinsip ACID dalam konteks transaksi SQLite:

1. Atomicity (Atomic): Ini berarti bahwa transaksi dianggap sebagai unit tunggal yang tidak dapat dibatalkan. 
Semua perintah dalam transaksi harus berhasil dijalankan atau tidak ada yang berhasil dijalankan sama sekali. 
Jika salah satu perintah gagal, transaksi harus dibatalkan, dan perubahan yang mungkin telah dibuat oleh 
perintah-perintah sebelumnya harus dikembalikan ke keadaan semula.

2. Consistency (Konsistensi): Setiap transaksi harus menjaga integritas data, yang berarti bahwa data harus tetap 
konsisten sebelum dan setelah transaksi. Ini berarti bahwa transaksi tidak boleh menyebabkan database berada dalam 
keadaan yang tidak konsisten.

3. Isolation (Isolasi): Transaksi yang sedang berlangsung tidak boleh terpengaruh oleh transaksi lain yang mungkin 
berjalan secara bersamaan. Ini berarti bahwa dalam konteks transaksi SQLite, perintah dalam satu transaksi tidak 
boleh melihat atau mempengaruhi perubahan yang dilakukan oleh transaksi lain yang sedang berjalan secara bersamaan.

4. Durability (Daya Tahan): Setelah transaksi berhasil selesai, perubahan yang telah dibuat oleh transaksi tersebut 
harus tetap ada dalam database meskipun terjadi kegagalan sistem, pemadaman listrik, atau kejadian tak terduga 
lainnya. Dengan kata lain, data yang telah ditambahkan atau diubah oleh transaksi tersebut harus tetap persisten 
dalam database.

Dalam SQLite, kalian dapat menggunakan transaksi menggunakan perintah BEGIN, COMMIT, dan ROLLBACK untuk 
mengendalikan unit transaksi. Misalnya, kalian dapat memulai transaksi dengan BEGIN, menjalankan beberapa 
perintah SQL, dan kemudian mengakhiri transaksi dengan COMMIT jika semuanya berhasil atau ROLLBACK jika terjadi 
kegagalan. 

 */

/**
 * Cara Menggunakan SQLite dengan Node.js:
 * 
 * Preparing Project

Buat Folder Baru:
Buka terminal atau command prompt.
Navigasikan ke direktori tempat Kalian ingin membuat proyek baru.
Buat folder baru untuk proyek Kalian. Misalnya:

   
   mkdir proyek-sqlite
   


Masuk ke Folder Proyek:
Masuk ke folder proyek yang baru dibuat:

   
   cd proyek-sqlite
   


Buat Berkas index.js:
Buat berkas index.js di dalam folder proyek Kalian:

   
   touch index.js
   


Inisialisasi Proyek Node.js:
Jalankan perintah berikut untuk menginisialisasi proyek Node.js:

   
   npm init -y
   

Ini akan membuat berkas package.json dengan pengaturan default.

Instalasi Modul SQLite:
Sekarang, Kalian dapat menginstal modul SQLite untuk proyek Kalian:

   
   npm install sqlite3
   

Ini akan menginstal modul SQLite dan menambahkannya sebagai dependensi ke dalam package.json

 */