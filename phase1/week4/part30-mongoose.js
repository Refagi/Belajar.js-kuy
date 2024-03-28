/*ORM VS ODM
ORM (Object-Relational Mapping) dan ODM (Object-Document Mapping) adalah dua konsep yang digunakan dalam 
pengembangan perangkat lunak untuk memudahkan interaksi dengan basis data. Mereka digunakan dalam konteks 
berbeda tergantung pada tipe basis data yang digunakan:

ORM (Object-Relational Mapping):
1.Digunakan dalam aplikasi yang menggunakan basis data relasional seperti PostgreSQL, MySQL, atau Oracle.
2.ORM menghubungkan objek dalam bahasa pemrograman (seperti Java, Python, atau C#) dengan tabel dalam 
basis data relasional.
3.ORM memungkinkan Kalian untuk berinteraksi dengan basis data relasional menggunakan objek dan query 
berbasis objek daripada SQL murni. Ini membuat pengembangan lebih mudah karena Kalian dapat berfokus 
pada manipulasi objek daripada bekerja dengan query SQL yang kompleks.
4.Contoh ORM populer termasuk Hibernate untuk Java, Entity Framework untuk .NET, Django ORM untuk Python, 
Dan Prisma untuk node Js (yang kita pelajari).

ODM (Object-Document Mapping):
1.Digunakan dalam aplikasi yang menggunakan basis data dokumen, seperti MongoDB, Couchbase, atau Cassandra.
2.ODM menghubungkan objek dalam bahasa pemrograman dengan dokumen dalam basis data dokumen.
3.ODM memungkinkan Kalian untuk menyimpan, mengambil, dan memanipulasi data dalam bentuk dokumen, 
yang biasanya dalam format JSON atau BSON, tanpa perlu menulis query SQL.
4.Ini sangat berguna dalam pengembangan aplikasi yang menggunakan model data fleksibel, 
seperti dokumen dalam basis data NoSQL.
5.Contoh ODM populer termasuk Mongoose untuk Node.js dan PyMongo untuk Python.

Perbedaan utama antara ORM dan ODM adalah jenis basis data yang mereka dukung dan cara mereka memetakan 
objek dalam bahasa pemrograman ke struktur data dalam basis data. 
ORM cocok untuk basis data relasional, sementara ODM lebih sesuai untuk basis data dokumen. 
Pilihan antara keduanya tergantung pada kebutuhan proyek dan jenis basis data yang Kalian gunakan.*/


/*
Mongoose ODM
Mongoose adalah salah satu ODM yang paling populer dan sering digunakan untuk Node.js dalam konteks MongoDB. 
Mongoose menyediakan alat dan fitur yang kuat untuk mengelola skema basis data, membuat model-data, 
dan menjalankan operasi CRUD (Create, Read, Update, Delete) pada basis data MongoDB. 
Berikut beberapa fitur utama Mongoose:

1.Skema (Schema): Mongoose memungkinkan pengembang untuk mendefinisikan skema atau struktur data yang akan 
disimpan dalam basis data MongoDB. Skema ini menentukan atribut apa yang akan ada pada dokumen dan 
tipe data masing-masing atribut.

2.Model: Mongoose memungkinkan pengembang untuk membuat model-data yang berbasis pada skema yang telah 
didefinisikan. Model-model ini memungkinkan kalian untuk berinteraksi dengan data dalam basis data MongoDB.

3.Validasi: Mongoose menyediakan validasi data otomatis berdasarkan skema yang telah didefinisikan. 
Ini memastikan bahwa data yang disimpan dalam basis data sesuai dengan aturan yang telah ditetapkan.

4.Querying: Mongoose menyediakan API yang kuat untuk menjalankan kueri terhadap basis data MongoDB. 
Penggunaan Mongoose membuat kueri menjadi lebih mudah dan lebih intuitif.

5.Middleware: Mongoose mendukung middleware yang memungkinkan pengembang untuk menambahkan logika 
sebelum atau sesudah operasi seperti penyimpanan atau pembacaan data.

6.Referensi dan Referensi Bersarang: Mongoose mendukung referensi antar-dokumen dan dokumen bersarang, 
memungkinkan untuk memodelkan hubungan antar data dalam basis data.

7.Populasi: Mongoose memungkinkan pengembang untuk mengisi (populate) data yang terkait dalam satu kueri, 
menghindari kebutuhan untuk kueri berulang-ulang.

8.Plugin: Mongoose mendukung penggunaan plugin untuk menambahkan fungsionalitas tambahan ke model-data.

Dengan menggunakan Mongoose, pengembang dapat dengan mudah mengintegrasikan MongoDB ke dalam 
aplikasi Node.js mereka dan mengelola data dengan cara yang lebih terstruktur. 
Itu membuat pengembangan dengan MongoDB menjadi lebih efisien dan produktif dalam 
pengembangan aplikasi berbasis dokumen.

Explore : 
https://mongoosejs.com/  */