/**Database NoSQL (Non-SQL) adalah jenis database yang dirancang untuk menyimpan, mengelola, dan mengakses data 
 * dalam format yang berbeda dari database relasional tradisional. Database NoSQL lebih fleksibel dalam 
 * menangani data yang tidak memiliki struktur yang ketat atau sering berubah. Dalam database NoSQL, 
 * kalian dapat menyimpan data dalam bentuk dokumen, grafik, kolom, atau model data lainnya yang tidak terikat 
 * pada tabel dengan skema yang telah ditentukan.

Keuntungan utama dari database NoSQL adalah fleksibilitasnya. Kalian tidak perlu mendefinisikan skema tabel 
terlebih dahulu, sehingga kalian dapat dengan mudah menambahkan atau mengubah jenis data tanpa perlu melakukan 
perubahan skema yang rumit. Hal ini sangat berguna dalam pengembangan aplikasi yang membutuhkan penyesuaian 
cepat terhadap perubahan dalam struktur data.

Terdapat beberapa jenis database NoSQL, termasuk:

1.Database Dokumen: Database ini menyimpan data dalam bentuk dokumen, seperti JSON atau BSON. Contoh terkenal 
dari jenis ini adalah MongoDB.

2.Database Kolom: Database kolom menyimpan data dalam kolom daripada baris. Mereka efisien untuk aplikasi yang 
membutuhkan pembacaan data berbasis kolom. Contohnya adalah Apache Cassandra.

3.Database Grafik: Database grafik digunakan untuk menyimpan dan mengelola data yang memiliki hubungan kompleks. 
Mereka berguna dalam aplikasi yang memerlukan analisis hubungan, seperti jejaring sosial. Contoh database grafik 
termasuk Neo4j.

4.Database Key-Value: Database ini menyimpan data dalam pasangan kunci-nilai, yang sangat cepat dalam operasi 
penyimpanan dan pengambilan data. Redis adalah salah satu contoh database key-value yang terkenal.

Database NoSQL memiliki peran yang penting dalam pengembangan aplikasi modern yang berfokus pada skalabilitas, 
fleksibilitas, dan performa. Mereka dapat digunakan untuk berbagai jenis aplikasi, termasuk e-commerce, media 
sosial, analisis data, dan banyak lagi.  */



/**Gimana cara kerja Relasi No SQL ?
Relasi NoSQL adalah konsep yang agak berbeda dari relasi dalam database relasional tradisional. Database NoSQL 
biasanya dirancang untuk mengelola data tanpa skema yang ketat dan tidak bergantung pada hubungan tabel seperti 
dalam database relasional. Meskipun begitu, beberapa database NoSQL dapat menangani relasi antara data dengan 
beberapa cara berikut:

1.Embedding (Penanaman): Salah satu cara umum untuk menangani relasi dalam database NoSQL adalah dengan menanamkan 
(embedding) satu dokumen ke dalam dokumen lain. Ini mirip dengan konsep menyimpan objek bersarang dalam objek 
lain dalam format dokumen. Misalnya, jika kalian memiliki koleksi "Pengguna" dan "Komentar" dalam database NoSQL 
dokumen, setiap dokumen "Komentar" dapat mencakup referensi atau informasi pengguna yang berkaitan. 
Dengan cara ini, kalian dapat mengakses data terkait secara langsung dari dokumen utama tanpa perlu melakukan 
JOIN seperti dalam database relasional.

2.Referensi: Database NoSQL juga dapat menggunakan referensi atau ID unik untuk menghubungkan dokumen yang saling 
berhubungan. Dalam hal ini, kalian akan menyimpan ID dokumen lain sebagai referensi dalam dokumen utama. 
Dengan cara ini, kalian dapat mengikuti referensi untuk mengakses data terkait ketika diperlukan. 
Ini mirip dengan konsep kunci asing dalam database relasional, tetapi tanpa skema yang ketat.

3.Grafik: Beberapa jenis database NoSQL, seperti database grafik, dirancang khusus untuk menangani data yang 
memiliki hubungan kompleks. Mereka menggunakan struktur grafik untuk menggambarkan entitas dan hubungannya. 
Setiap entitas dalam database grafik dapat memiliki node yang terhubung dengan node lain melalui relasi khusus. 
Ini sangat berguna untuk aplikasi yang memerlukan analisis hubungan, seperti jejaring sosial atau analisis 
jaringan.

4.Kolom: Beberapa database NoSQL, seperti database kolom, dapat digunakan untuk mengelola data yang memiliki 
banyak atribut tetapi hanya sebagian kecil atribut yang diperlukan dalam suatu konteks. Dengan menggunakan 
database kolom, kalian dapat mengakses data terkait dengan cepat dan efisien tanpa perlu mengambil seluruh 
baris data.

Pilihan cara mengelola relasi dalam database NoSQL bergantung pada jenis database yang kalian gunakan dan 
kebutuhan aplikasi kalian. Penting untuk memahami model data dan fitur yang ditawarkan oleh database NoSQL 
tertentu untuk memilih pendekatan yang paling sesuai dengan kasus penggunaan kalian. */