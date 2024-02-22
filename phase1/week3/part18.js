/**
 * Database adalah kumpulan data yang terstruktur yang disimpan secara elektronik di dalam sebuah sistem komputer. 
 Database digunakan untuk menyimpan, mengatur, dan mengelola informasi dengan cara yang efisien, 
 sehingga memungkinkan akses yang cepat dan mudah ke data tersebut. 

Berikut beberapa konsep penting dalam pemahaman database:

1. Data: Data adalah informasi yang direpresentasikan dalam bentuk yang dapat diolah oleh komputer. 
Data dalam database dapat berupa teks, angka, gambar, audio, atau jenis data lainnya.

2. Sistem Manajemen Basis Data (Database Management System - DBMS): DBMS adalah perangkat lunak yang digunakan untuk 
mengelola database. DBMS memungkinkan kalian untuk membuat, mengedit, menghapus, dan mengambil data dari database 
dengan cara yang aman dan efisien.

3. Tabel: Dalam sebuah database relasional, data disimpan dalam tabel. Setiap tabel terdiri dari baris dan kolom. 
Setiap baris dalam tabel mewakili satu rekord data, sementara setiap kolom mewakili satu atribut atau field dari 
data tersebut.

4. Kunci Utama (Primary Key): Kunci utama adalah salah satu kolom dalam sebuah tabel yang memiliki nilai unik untuk 
setiap baris. Kunci utama digunakan untuk mengidentifikasi secara unik setiap rekord dalam tabel.

5. SQL (Structured Query Language): SQL adalah bahasa yang digunakan untuk mengakses dan mengelola data dalam database. 
Dengan SQL, kalian dapat melakukan berbagai operasi seperti pengambilan data (query), penambahan data (insert), 
pembaruan data (update), dan penghapusan data (delete).

6. Indeks: Indeks adalah struktur yang digunakan untuk meningkatkan kinerja pencarian data dalam database. 
Mereka memungkinkan kalian untuk menemukan data lebih cepat daripada mencari melalui seluruh tabel.

7. Relasi: Database relasional adalah jenis database yang terdiri dari beberapa tabel yang saling terhubung melalui 
kunci-kunci. Ini memungkinkan kalian untuk menggabungkan data dari berbagai tabel dengan cara yang efisien.

8. Backup dan Pengamanan: Menjaga keamanan dan melakukan pencadangan (backup) data dalam database sangat penting. 
Ini melibatkan langkah-langkah seperti enkripsi data, mengatur hak akses pengguna, dan rutin mencadangkan data 
untuk menghindari kehilangan informasi.

9. Transaksi: Transaksi adalah operasi database yang dapat mencakup beberapa perubahan data. DBMS harus mendukung 
transaksi yang aman dan konsisten, dan dapat mengembalikan database ke keadaan sebelum transaksi jika terjadi 
kesalahan.

10. Pemeliharaan dan Pengoptimalan: Database memerlukan pemeliharaan rutin, seperti membersihkan data yang tidak perlu, 
mengoptimalkan kueri, dan memastikan performa database tetap optimal.
 




Memahami SQL 
SQL adalah singkatan dari "Structured Query Language," yang merupakan bahasa pemrograman khusus yang digunakan 
untuk mengelola dan mengakses database. SQL adalah standar industri yang digunakan secara luas dalam sistem 
manajemen basis data (Database Management Systems - DBMS) untuk berbagai tugas, seperti pengambilan (query), 
pembaruan, penghapusan, dan penambahan data dalam basis data.

Berikut adalah beberapa poin penting tentang SQL:

Bahasa Query: SQL adalah bahasa yang digunakan untuk membuat, mengubah, dan mengambil data dari basis data. 
Dengan SQL, kalian dapat membuat pertanyaan (query) terhadap database untuk mengambil data yang diinginkan.

Tipe-tipe Perintah: SQL terdiri dari berbagai jenis perintah, termasuk SELECT (untuk mengambil data), 
INSERT (untuk menambahkan data), UPDATE (untuk memperbarui data), DELETE (untuk menghapus data), 
serta perintah-perintah lain untuk mengelola struktur database seperti CREATE, ALTER, dan DROP.

Basis Data Relasional: SQL paling sering digunakan dalam basis data relasional, di mana data disimpan dalam tabel 
yang memiliki relasi (hubungan) satu sama lain. Tabel-tabel ini digunakan untuk mengorganisasi dan mengelola data 
dengan cara yang terstruktur.

Standar Industri: SQL adalah standar industri yang diakui dan digunakan oleh sebagian besar sistem manajemen basis 
data, termasuk MySQL, PostgreSQL, Microsoft SQL Server, Oracle Database, dan banyak lainnya. Meskipun ada variasi 
dalam implementasi SQL oleh berbagai DBMS, banyak perintah SQL dasar seringkali seragam di seluruh platform.

Fleksibilitas: SQL sangat fleksibel dan dapat digunakan untuk berbagai tugas, mulai dari pertanyaan sederhana 
hingga pengoperasian kompleks yang melibatkan beberapa tabel dan kondisi.




Contoh: Database Karyawan

Misalkan kita memiliki database sederhana untuk mengelola data karyawan dalam sebuah perusahaan. Database ini akan 
memiliki satu tabel bernama "Karyawan" dengan beberapa kolom seperti "ID Karyawan," "Nama," "Usia," dan "Jabatan."

Visualisasi Tabel "Karyawan":

+-------------+------------+-----+-----------+
| ID Karyawan |    Nama    | Usia|   Jabatan  |
+-------------+------------+-----+-----------+
|     1       | John Doe   |  30 | Manager   |
|     2       | Jane Smith |  25 | Programmer|
|     3       | Bob Johnson|  35 | Sales     |
|     4       | Alice Brown|  28 | Designer  |
+-------------+------------+-----+-----------+



1. Menampilkan Data Karyawan:


SELECT * FROM Karyawan;


Hasilnya:

+-------------+------------+-----+-----------+
| ID Karyawan |    Nama    | Usia|   Jabatan  |
+-------------+------------+-----+-----------+
|     1       | John Doe   |  30 | Manager   |
|     2       | Jane Smith |  25 | Programmer|
|     3       | Bob Johnson|  35 | Sales     |
|     4       | Alice Brown|  28 | Designer  |
+-------------+------------+-----+-----------+


2. Menambahkan Data Karyawan Baru:


INSERT INTO Karyawan (Nama, Usia, Jabatan)
VALUES ('Eva White', 29, 'Analyst');


Hasilnya:

Baris data berikut telah ditambahkan ke dalam tabel "Karyawan":

+-------------+------------+-----+-----------+
| ID Karyawan |    Nama    | Usia|   Jabatan  |
+-------------+------------+-----+-----------+
|     1       | John Doe   |  30 | Manager   |
|     2       | Jane Smith |  25 | Programmer|
|     3       | Bob Johnson|  35 | Sales     |
|     4       | Alice Brown|  28 | Designer  |
|     5       | Eva White  |  29 | Analyst   |
+-------------+------------+-----+-----------+


3. Memperbarui Data Karyawan:


UPDATE Karyawan
SET Usia = 31
WHERE ID Karyawan = 1;


Hasilnya:

Data karyawan dengan ID Karyawan 1 telah diperbarui:

+-------------+------------+-----+-----------+
| ID Karyawan |    Nama    | Usia|   Jabatan  |
+-------------+------------+-----+-----------+
|     1       | John Doe   |  31 | Manager   |
|     2       | Jane Smith |  25 | Programmer|
|     3       | Bob Johnson|  35 | Sales     |
|     4       | Alice Brown|  28 | Designer  |
|     5       | Eva White  |  29 | Analyst   |
+-------------+------------+-----+-----------+


4. Menghapus Data Karyawan:


DELETE FROM Karyawan
WHERE ID Karyawan = 3;


Hasilnya:

Data karyawan dengan ID Karyawan 3 telah dihapus. Tabel "Karyawan" sekarang terlihat seperti ini:

+-------------+------------+-----+-----------+
| ID Karyawan |    Nama    | Usia|   Jabatan  |
+-------------+------------+-----+-----------+
|     1       | John Doe   |  31 | Manager   |
|     2       | Jane Smith |  25 | Programmer|
|     4       | Alice Brown|  28 | Designer  |
|     5       | Eva White  |  29 | Analyst   |
+-------------+------------+-----+-----------+


5. Menampilkan Data Karyawan dengan Kriteria Tertentu:


SELECT * FROM Karyawan
WHERE Jabatan = 'Programmer';


Hasilnya:

Karyawan dengan jabatan "Programmer" yang ditampilkan:

+-------------+------------+-----+-----------+
| ID Karyawan |    Nama    | Usia|   Jabatan  |
+-------------+------------+-----+-----------+
|     2       | Jane Smith |  25 | Programmer|
+-------------+------------+-----+-----------+
 


Relasi dalam Database

Dalam konteks database, relasi mengacu pada cara tabel dalam database berhubungan satu sama lain. 
Relasi ini memungkinkan kalian untuk menggabungkan data dari berbagai tabel untuk menghasilkan informasi yang 
lebih lengkap. Relasi dalam database biasanya dibangun melalui penggunaan kunci asing (foreign key) yang 
menghubungkan kolom di satu tabel dengan kolom di tabel lain.

Kita akan menambahkan 2 table baru "Proyek" dan "Pekerjaan" untuk menciptakan relasi antar table.

Visualisasi Tabel "Proyek":

+-----------+-----------------+---------------------+
| ID Proyek |     Nama Proyek | ID Karyawan Penanggung|
+-----------+-----------------+---------------------+
|     101   |   Proyek A      |          2            |
|     102   |   Proyek B      |          4            |
|     103   |   Proyek C      |          1            |
+-----------+-----------------+---------------------+


Visualisasi Tabel "Pekerjaan":

+-----------+-----------------+-----------+-------------+
| ID Pekerjaan | Nama Pekerjaan | ID Proyek | ID Karyawan |
+-----------+-----------------+-----------+-------------+
|     201   |   Pekerjaan 1  |     101   |     2       |
|     202   |   Pekerjaan 2  |     101   |     2       |
|     203   |   Pekerjaan 3  |     101   |     4       |
|     204   |   Pekerjaan 4  |     102   |     4       |
|     205   |   Pekerjaan 5  |     103   |     1       |
+-----------+-----------------+-----------+-------------+


Relasi case 3 table (karyawan, proyek, pekerjaan):
Tabel "Karyawan" memiliki relasi one-to-many (1 : M ) dengan tabel "Proyek," karena setiap karyawan dapat 
bertanggung jawab atas banyak proyek, tetapi setiap proyek hanya memiliki satu karyawan yang bertanggung jawab.

Tabel "Proyek" memiliki relasi one-to-many (1 : M ) dengan tabel "Pekerjaan," karena setiap proyek dapat memiliki 
banyak pekerjaan, tetapi setiap pekerjaan hanya terkait dengan satu proyek.

Tabel "Karyawan" juga memiliki relasi one-to-many (1: M ) dengan tabel "Pekerjaan," karena setiap karyawan dapat 
bekerja pada banyak pekerjaan, tetapi setiap pekerjaan hanya dilakukan oleh satu karyawan.




Contoh Penggunaan Berbagai Jenis Join dan relasi antar table:

1. Menampilkan Karyawan dan Proyek yang Mereka Tangani:


SELECT Karyawan.Nama, Proyek.NamaProyek
FROM Karyawan
JOIN Proyek ON Karyawan.IDKaryawan = Proyek.IDKaryawanPenanggung;


Hasilnya:
+------------+------------+
|    Nama    | Nama Proyek |
+------------+------------+
| John Doe   | Proyek C    |
| Jane Smith | Proyek A    |
| Alice Brown| Proyek B    |
+------------+------------+


2. Menampilkan Proyek dan Pekerjaan dalam Setiap Proyek:


SELECT Proyek.NamaProyek, Pekerjaan.NamaPekerjaan
FROM Proyek
JOIN Pekerjaan ON Proyek.IDProyek = Pekerjaan.IDProyek;


Hasilnya:
+------------+-----------------+
| Nama Proyek | Nama Pekerjaan |
+------------+-----------------+
| Proyek A    | Pekerjaan 1    |
| Proyek A    | Pekerjaan 2    |
| Proyek A    | Pekerjaan 3    |
| Proyek B    | Pekerjaan 4    |
| Proyek C    | Pekerjaan 5    |
+------------+-----------------+


3. Menampilkan Karyawan dan Pekerjaan yang Mereka Kerjakan:


SELECT Karyawan.Nama, Pekerjaan.NamaPekerjaan
FROM Karyawan
JOIN Pekerjaan ON Karyawan.IDKaryawan = Pekerjaan.IDKaryawan;


Hasilnya:
+------------+-----------------+
|    Nama    | Nama Pekerjaan |
+------------+-----------------+
| John Doe   | Pekerjaan 5    |
| Jane Smith | Pekerjaan 1    |
| Jane Smith | Pekerjaan 2    |
| Alice Brown| Pekerjaan 3    |
| Alice Brown| Pekerjaan 4    |
+------------+-----------------+


4. Menampilkan Karyawan, Proyek, dan Pekerjaan dalam Satu Query:


SELECT Karyawan.Nama, Proyek.NamaProyek, Pekerjaan.NamaPekerjaan
FROM Karyawan
JOIN Proyek ON Karyawan.IDKaryawan = Proyek.IDKaryawanPenanggung
JOIN Pekerjaan ON Proyek.IDProyek = Pekerjaan.IDProyek;


Hasilnya:
+------------+------------+-----------------+
|    Nama    | Nama Proyek | Nama Pekerjaan |
+------------+------------+-----------------+
| John Doe   | Proyek C    | Pekerjaan 5    |
| Jane Smith | Proyek A    | Pekerjaan 1    |
| Jane Smith | Proyek A    | Pekerjaan 2    |
| Alice Brown| Proyek B    | Pekerjaan 4    |
| Alice Brown| Proyek A    | Pekerjaan 3    |
+------------+------------+-----------------+




Macam Macam Database

Ada beberapa jenis database yang berbeda, yang digunakan untuk berbagai keperluan dan memenuhi berbagai 
kebutuhan aplikasi. Berikut adalah beberapa jenis database yang umum:

1. Database Relasional: Ini adalah jenis database yang paling umum digunakan. Data disimpan dalam tabel yang memiliki 
baris dan kolom, dan tabel tersebut memiliki relasi satu sama lain berdasarkan kunci-kunci. Contoh database 
relasional meliputi MySQL, PostgreSQL, Oracle Database, Microsoft SQL Server, dan SQLite.

2. Database NoSQL:
 - Document Database: Data disimpan dalam dokumen, seperti JSON atau BSON. Contoh database dokumen adalah MongoDB, 
Couchbase, dan RavenDB.

- Key-Value Store: Data disimpan dalam pasangan kunci-nilai, yang mirip dengan dictionary. Contoh database 
key-value adalah Redis dan Riak.

- Column-family Store: Data disimpan dalam keluarga kolom, cocok untuk data yang terstruktur seperti data sensor 
dan analitik. Contoh database column-family adalah Apache Cassandra dan HBase.

- Grafik Database: Digunakan untuk menyimpan data yang memiliki hubungan grafik kompleks, seperti jejaring sosial. 
Contoh database grafik adalah Neo4j dan OrientDB.

3. Database In-Memory: Semua data disimpan dalam RAM (memori utama) daripada di disk, sehingga menghasilkan akses 
data yang sangat cepat. Contoh database in-memory adalah Redis dan Memcached.

4. Time-Series Database: Digunakan untuk menyimpan data yang berkembang seiring waktu, seperti data sensor, log, 
atau data waktu nyata. Contoh database time-series adalah InfluxDB dan Prometheus.

5. Database Distribusi: Disebarluaskan di seluruh jaringan komputer untuk mengelola data secara terdistribusi. 
Contoh database distribusi adalah Apache Cassandra, Amazon DynamoDB, dan Google Cloud Bigtable.

6. Database Multi-Model: Mendukung beberapa model data, seperti model dokumen, grafik, atau relasional, 
dalam satu sistem database. Contoh database multi-model adalah ArangoDB dan Couchbase.

7. Database Pembaruan Otomatis (Auto-Updating): Data diperbarui secara otomatis sesuai dengan perubahan yang 
terjadi di sumber data asli. Contoh database pembaruan otomatis adalah Firebase Realtime Database.

8. Database Berbasis File: Data disimpan dalam berkas-berkas teks atau biner. Meskipun tidak umum digunakan 
dalam skala besar, mereka berguna untuk aplikasi sederhana. Contoh database berbasis file adalah SQLite 
dan Microsoft Access.

9. Database Cloud: Database yang di-host di awan (cloud) dan dapat diakses secara terpusat. 
Contoh database cloud termasuk Amazon RDS, Azure SQL Database, dan Google Cloud SQL.

10. Database Terdistribusi: Disebarluaskan di seluruh pusat data atau bahkan di seluruh dunia, menggabungkan data 
dari beberapa lokasi fisik. Contoh database terdistribusi termasuk Google Spanner dan Amazon DynamoDB Global Tables.




Setiap jenis database memiliki karakteristik dan kelebihan sendiri, dan pemilihan jenis database yang tepat sangat 
tergantung pada kebutuhan aplikasi dan tipe data yang akan dikelola. Beberapa aplikasi bahkan menggunakan beberapa 
jenis database untuk mengelola data yang berbeda dalam aplikasi yang sama.


Tipe Data dalam database

Tipe data dalam database merujuk kepada jenis data yang dapat disimpan dalam kolom tabel. Tipe data ini mengontrol 
bagaimana data akan disimpan, diindeks, dan diperlakukan oleh database. Berikut adalah beberapa tipe data umum yang 
digunakan dalam database:

1. Tipe Data Teks (Text Data Types):
CHAR(n): Menyimpan karakter dengan panjang tetap n.
VARCHAR(n): Menyimpan karakter dengan panjang variabel hingga n.
TEXT: Menyimpan teks dengan panjang variabel yang lebih besar daripada VARCHAR.
Contoh: CHAR(10), VARCHAR(255), TEXT.

2.Tipe Data Angka (Numeric Data Types):
INT: Menyimpan bilangan bulat.
FLOAT: Menyimpan angka desimal dengan presisi ganda.
NUMERIC(p, s): Menyimpan angka desimal dengan presisi p dan skala s.
Contoh: INT, FLOAT, NUMERIC(8, 2).

3. Tipe Data Tanggal dan Waktu (Date and Time Data Types):
DATE: Menyimpan tanggal.
TIME: Menyimpan waktu.
DATETIME: Menyimpan tanggal dan waktu.
Contoh: DATE, TIME, DATETIME.

4. Tipe Data Boolean (Boolean Data Type):
BOOLEAN: Menyimpan nilai benar (TRUE) atau salah (FALSE).
Contoh: BOOLEAN.

5. Tipe Data Binary (Binary Data Types):
BLOB: Menyimpan data biner, seperti gambar atau file.
Contoh: BLOB.

6. Tipe Data UUID (Universally Unique Identifier):
UUID: Menyimpan identifier unik global yang dihasilkan secara acak.
Contoh: UUID.

7. Tipe Data Enumerasi (Enumeration Data Types):
ENUM: Menyimpan satu nilai dari sekumpulan nilai yang telah ditentukan sebelumnya.
Contoh: ENUM('Merah', 'Hijau', 'Biru').

8. Tipe Data Kunci Asing (Foreign Key Data Types):
REFERENCES: Menunjukkan kolom yang merupakan kunci asing yang mengacu pada kolom lain dalam tabel atau tabel 
lain dalam database.




Populate Table Karyawan
Sebelumnya kita memakai tabel Karyawan untuk contoh belajar SQL. 
karena kita sudah tahu tipe tipe data di kolom table, kita akan belajar cara membuat tabel karyawan 
dalam database menggunakan SQL.

CREATE TABLE Karyawan (
    IDKaryawan INT PRIMARY KEY,
    Nama VARCHAR(50),
    Usia INT,
    Jabatan VARCHAR(50)
);


Dalam contoh di atas, kita menggunakan perintah SQL CREATE TABLE untuk membuat tabel "Karyawan." 
Tabel ini memiliki empat kolom, yaitu "IDKaryawan," "Nama," "Usia," dan "Jabatan." INT dan VARCHAR(50) adalah 
contoh tipe data yang digunakan untuk setiap kolom. PRIMARY KEY menandakan bahwa kolom "IDKaryawan" adalah kunci 
utama tabel.

Perintah SQL di atas akan membuat tabel "Karyawan" dengan skema yang telah ditentukan. Data dapat kemudian 
dimasukkan ke dalam tabel ini menggunakan perintah SQL seperti INSERT INTO.

INSERT INTO Karyawan (IDKaryawan, Nama, Usia, Jabatan)
VALUES (1, 'John Doe', 30, 'Manager');

INSERT INTO Karyawan (IDKaryawan, Nama, Usia, Jabatan)
VALUES (2, 'Jane Smith', 25, 'Programmer');

INSERT INTO Karyawan (IDKaryawan, Nama, Usia, Jabatan)
VALUES (3, 'Bob Johnson', 35, 'Sales');

INSERT INTO Karyawan (IDKaryawan, Nama, Usia, Jabatan)
VALUES (4, 'Alice Brown', 28, 'Designer');


Dalam contoh di atas, kita menggunakan perintah INSERT INTO untuk memasukkan data ke dalam tabel "Karyawan." 
Setiap perintah INSERT INTO menyisipkan satu baris data ke dalam tabel. Kita menyediakan nilai untuk setiap 
kolom sesuai dengan struktur tabel.

Misalnya, perintah pertama memasukkan data untuk John Doe dengan ID 1, nama 'John Doe', usia 30, dan jabatan 
'Manager'.

Kalian dapat mengulangi perintah INSERT INTO untuk memasukkan data karyawan lainnya ke dalam tabel sesuai dengan 
kebutuhan aplikasi kalian.



jalankan winpty ./sqlite3.exe
untuk buka sqlite di git bash
*/