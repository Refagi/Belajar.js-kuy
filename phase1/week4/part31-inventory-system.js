/**Ini adalah List API yang perlu di buat di Inventory System

User API:
Create User: POST /api/users
Get All Users: GET /api/users
Get User by ID: GET /api/users/{userId}
Update User: PUT /api/users/{userId}
Delete User: DELETE /api/users/{userId}

Auth API: (For authentication purposes)
User Login: POST /api/auth/login
User Logout: POST /api/auth/logout
User Register: POST /api/auth/register

Product API:
Create Product: POST /api/products
Get All Products: GET /api/products
Get Product by ID: GET /api/products/{productId}
Update Product: PUT /api/products/{productId}
Delete Product: DELETE /api/products/{productId}
Get Products by User: GET /api/users/{userId}/products

Category API:
Create Category: POST /api/categories
Get All Categories: GET /api/categories
Get Category by ID: GET /api/categories/{categoryId}
Update Category: PUT /api/categories/{categoryId}
Delete Category: DELETE /api/categories/{categoryId}

Order API:
Create Order: POST /api/orders
Get All Orders: GET /api/orders
Get Order by ID: GET /api/orders/{orderId}
Update Order: PUT /api/orders/{orderId}
Delete Order: DELETE /api/orders/{orderId}
Get Orders by User: GET /api/users/{orderId}/orders

OrderItem API:
Create OrderItem: POST /api/order-items
Get All OrderItems: GET /api/order-items
Get OrderItem by ID: GET /api/order-items/{orderItemId}
Update OrderItem: PUT /api/order-items/{orderItemId}
Delete OrderItem: DELETE /api/order-items/{orderItemId}
Get OrderItems by Order: GET /api/orders/{orderId}/order-items


NOTE
Semua code yang ada di Inventory System harus mengikuti instruksi sesuai part part yang dipelajarin 
materi selanjutnya. */


/**Inventory System Feature
Dari skema database yang telah dibuat, project ini memiliki potensi untuk mengimplementasikan beberapa fitur. 
Berikut beberapa fitur yang dapat diimplementasikan:

Manajemen Produk:
Tambahkan Produk: User dapat menambahkan produk baru ke dalam inventaris.
Lihat Semua Produk: User dapat melihat daftar semua produk yang ada di inventaris.
Lihat Produk per User: User dapat melihat daftar produk yang mereka miliki.
Detail Produk: User dapat melihat detail produk termasuk deskripsi, harga, dan ketersediaan stok.
Edit Produk: User dapat mengubah informasi produk yang ada.
Hapus Produk: User dapat menghapus produk dari inventaris.

Manajemen Kategori:
Tambahkan Kategori: User dapat membuat kategori baru untuk mengelompokkan produk.
Lihat Semua Kategori: User dapat melihat daftar semua kategori yang ada.
Edit Kategori: User dapat mengubah nama kategori.
Hapus Kategori: User dapat menghapus kategori, dan produk yang terkait dengan kategori tersebut harus 
dikelola atau dihapus.

Manajemen Pesanan:
Buat Pesanan: User dapat membuat pesanan dengan memilih produk, menentukan jumlah, dan mengisi informasi 
pelanggan.
Lihat Semua Pesanan: User dapat melihat daftar semua pesanan yang telah dibuat.
Lihat Pesanan per User: User dapat melihat pesanan yang mereka buat.
Detail Pesanan: User dapat melihat detail pesanan termasuk produk yang dibeli, jumlah, total harga, 
tanggal pesanan, dan informasi pelanggan.
Edit Pesanan: User dapat mengubah pesanan yang ada jika diperlukan.
Hapus Pesanan: User dapat menghapus pesanan yang telah selesai atau dibatalkan.

Manajemen Token dan Otentikasi User:
Registrasi User: User dapat mendaftar dan membuat akun dengan mengisi informasi dasar.
Login User: User dapat masuk ke akun mereka dengan menggunakan email dan kata sandi.
Otentikasi User: User akan diotentikasi melalui token saat menggunakan API yang memerlukan otentikasi.
Token Refresh: User dapat memperbarui token mereka untuk menjaga sesi tetap aktif.
Logout User: User dapat keluar dari akun mereka.

Manajemen Role:
ada beberapa tipe role dalam project ini:
   
User: role ini  hanya bisa memakai fitur manajemen produk (role user tidak bisa menggunakan order API).

   
Admin: Role Admin bisa akses semua fitur. */


//lanjutkan pakai set up folder fancy-todo-prisma-orm lalu ada tambahan ini
/**New Folder Setup 
setelah itu tambahkan folder baru untuk stuktur baru kita :
config : folder untuk mengatur semua config buat server kita. backend yang bagus itu pasti mempunyai set up 
configurasi yang baik agar bisa di scaling sesuai kebutuhan.

middlewares : folder untuk menyimpan file file custom middleware, karena kita akan membuat beberapa custom 
middleware seperti authentication, error handler dan validation.

utils : folder untuk menyimpan file file function tambahan yang bisa reusable (dipakai berkali kali) dalam 
kebutuhan backend kita, contoh nya custom Api Error dan Catch Async function dimana kita membuat sistem 
Catch sendiri di backend kita.

validations : folder untuk menyimpan file file validation menggunakan library joi, file ini di combine 
dengan middleware validate untuk validasi body sesuai API dan schema yang kita buat. */