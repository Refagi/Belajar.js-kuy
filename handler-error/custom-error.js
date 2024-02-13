/**Custom Error
Setelah menangani eror, pada materi ini kita akan mempelajari bagaimana membuat eror sendiri. Ketika mengembangkan 
suatu aplikasi, akan ada banyak sekali kemungkinan munculnya eror. Seringkali, kita membutuhkan kelas eror sendiri 
untuk menunjukkan kesalahan yang spesifik dan tidak tersedia dalam kelas Error bawaan dari JavaScript. */

let json = '{ "age": 30 }';
 
try {
  let user = JSON.parse(json);
 
  if (!user.name) {
    throw new SyntaxError("'name' is required.");
  }
 
  console.log(user.name);
  console.log(user.age);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log(`JSON Error: ${error.message}`);
  } else if (error instanceof ReferenceError) {
    console.log(error.message);
  } else {
    console.log(error.stack);
  }
}
/*
Awalnya, JSON.parse akan mengonversi data String menjadi object. Apabila format String tidak sesuai, maka fungsi 
tersebut akan melemparkan SyntaxError. Meskipun format atau sintaksis dari json string sudah sesuai, tetap ada 
kemungkinan data di dalamnya tidak lengkap. Saat ini kita masih menggunakan SyntaxError untuk menandai eror akibat 
data yang tidak lengkap, padahal secara sintaksis tidak ada masalah dari variabel json. Tentunya akan lebih baik 
jika kita punya Error yang lebih spesifik, bukan?

Untuk itu kita bisa membuat kelas Error kita sendiri dengan nama dan pesan yang lebih sesuai. Kelas ini merupakan 
turunan dari kelas Error yang sudah ada. Sebagai contoh, untuk mengecek validasi data dari json, kita bisa membuat 
kelas Error seperti ini:*/

//membuat class

class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }
   
//   const json = '{ "age": 30 }';
   
  try {
    const user = JSON.parse(json);
   
    if (!user.name) {
      throw new ValidationError("'name' is required.");
    }
    if (!user.age) {
      throw new ValidationError("'age' is required.");
    }
   
    console.log(user.name);
    console.log(user.age);
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.log(`JSON Syntax Error: ${error.message}`);
    } else if (error instanceof ValidationError) {
      console.log(`Invalid data: ${error.message}`);
    } else if (error instanceof ReferenceError) {
      console.log(error.message);
    } else {
      console.log(error.stack);
    }
  }
   
  /* output
  Invalid data: 'name' is required.
  */
//   Sekarang kode untuk menangani error menjadi lebih baik bukan? Penggunaan instanceOf akan memberikan hasil eror
// yang lebih detail dan sesuai dengan eror yang terjadi.


//kuis
/**
 * Saat ini, Anda sudah memiliki fungsi detectTriangle yang berguna untuk
 * mendeteksi jenis segitiga berdasarkan nilai argumen.
 * Contoh:
 *  - 1, 1, 1 -> Segitiga sama sisi
 *  - 4, 4, 2 -> Segitiga sama kaki
 *  - 3, 4, 6 -> Segitiga sembarang
 *
 * Namun fungsi detectTriangle belum berjalan dengan baik karena
 * bila ada argumen fungsi yang bukan number, alih-alih error, ia akan mengembalikan "Segitiga sembarang".
 * Contoh:
 *  - 1, false, 1 -> Segitiga sembarang
 *  - 'a', 3, 5 -> Segitiga sembarang
 *  - 12, 2, null -> Segitiga sembarang
 * Kondisi yang diharapkan:
 *  - 1, false, 1 -> Argumen kedua harus number
 *  - 'a', 3, 5 -> Argumen pertama harus number
 *  - 12, 2, null -> Argumen ketiga harus number
 *
 *  Tugas Anda adalah memperbaiki fungsi detectTriangle agar berjalan dengan kondisi yang diharapkan.
 *  Pastikan Anda menggunakan teknik Throwing dan Handling Error yah.
 *
 * TODO 1:
 * - Buatlah class ValidationError yang merupakan custom error dengan spesifikasi berikut:
 *   - Turunan dari class Error
 *   - Memiliki constructor(message)
 *   - this.name harus bernilai "ValidationError"
 *
 * TODO 2:
 * - Buatlah fungsi validateNumberInput yang memvalidasi 3 buah input (argumen) dengan spesifikasi berikut:
 *   - Menerima 3 argumen
 *   - Bila argumen pertama bukan number:
 *     - throw ValidationError dengan pesan 'Argumen pertama harus number'
 *   - Bila argumen kedua bukan number:
 *     - throw ValidationError dengan pesan 'Argumen kedua harus number'
 *   - Bila argumen ketiga bukan number:
 *     - throw ValidationError dengan pesan 'Argumen ketiga harus number'
 *
 * TODO 3:
 * - Panggil fungsi validateNumberInput di dalam fungsi detectTriangle untuk memvalidasi nilai argumen a, b, dan c.
 *   - pastikan Anda memanggil validateNumberInput menggunakan try .. catch.
 *   - bila block catch terpanggil, kembalikan fungsi detectTriangle dengan pesan error yang dibawa fungsi validateNumberInput.
 */

// TODO 1
class ValidationError extends Error {
    constructor (message) {
        super(message)
        this.message = message
        this.name = "ValidationError"
    }
}

// TODO 2
function validateNumberInput (cekOne, cekTwo, cekThree){
    if (typeof cekOne !== typeof Number()){
        throw new ValidationError ('Argumen pertama harus number');
    } else if (typeof cekTwo !== typeof Number()){
        throw new ValidationError ('Argumen kedua harus number');
    } else if (typeof cekThree !== typeof Number()){
        throw new ValidationError ('Argumen ketiga harus number');
    }
}

const detectTriangle = (a, b, c) => {
    // TODO 3
  try {
     validateNumberInput(a, b, c)
     if (a === b && b === c) {
        return 'Segitiga sama sisi';
      }
    
      if (a === b || a === c || b === c) {
        return 'Segitiga sama kaki';
      }
    
      return 'Segitiga sembarang';
  } catch (error){
    return error.message
  };
}

