/*Hashing adalah proses mengubah data input menjadi nilai yang lebih pendek dan tetap. 
Hashing digunakan dalam berbagai aplikasi, termasuk penyimpanan data dalam struktur data seperti tabel hash, 
pengamanan kata sandi, dan validasi integritas data. Hashing algorithms bekerja dengan mengambil data input 
dan menghasilkan nilai hash yang berukuran tetap, yang dapat digunakan untuk mengidentifikasi data.

Berikut adalah contoh sederhana dari hashing algorithm menggunakan JavaScript:*/

// Fungsi hashing sederhana
function simpleHash(input) {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash += input.charCodeAt(i);
  }
  return hash;
}

const data = "example";
const hashValue = simpleHash(data);
console.log(`Data: ${data}`);
console.log(`Hash Value: ${hashValue}`);

/*Langkah-langkah algoritma hashing sederhana di atas:

1.Tentukan data input yang ingin di-hash. Dalam contoh ini, kita menggunakan string "example".
2.Inisialisasi variabel hash dengan nilai awal 0.
3.Loop melalui setiap karakter dalam data input.
4.Ambil kode karakter dalam bentuk angka (kode ASCII) dan tambahkan ke variabel hash.
5.Hasil akhir dari variabel hash adalah nilai hash yang dihasilkan.

Visualisasi:

Data: example
Hash Value: 788

Namun, penting untuk dicatat bahwa algoritma hashing sederhana seperti ini tidak cocok untuk keamanan yang tinggi 
karena rentan terhadap berbagai serangan. Hashing algorithms yang lebih kuat seperti SHA-256 
(Secure Hash Algorithm 256-bit) digunakan dalam aplikasi keamanan data yang lebih serius.

SHA-256 bekerja dengan cara yang lebih kompleks dan melibatkan berbagai operasi matematika dan 
bitwise pada blok-blok data input untuk menghasilkan nilai hash. Meskipun lebih rumit daripada contoh di atas, 
prinsip dasarnya adalah sama: mengambil data input dan menghasilkan nilai hash tetap.

Penting untuk memilih algoritma hashing yang sesuai untuk tujuan tertentu. Hashing digunakan dalam berbagai 
aplikasi termasuk keamanan data, penyimpanan data dalam struktur tabel hash, dan validasi integritas data 
dalam digital signatures.
*/

