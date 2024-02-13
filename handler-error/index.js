// Try and Catch
// Untuk menangani eror pada JavaScript, gunakan try dan catch. Penulisan kode try-catch untuk menangani eror 
// adalah seperti ini:

try {
  // kode
} catch (error) {
  // error handling
}


/**Object error memiliki beberapa properti utama di dalamnya, yaitu:

name : Nama error yang terjadi.
message : Pesan tentang detail error.
stack : Informasi urutan kejadian yang menyebabkan error. Umumnya digunakan untuk debugging karena terdapat 
informasi baris mana yang menyebabkan error. */

try {
    console.log("Awal blok try");   // (1)
    errorCode;                      // (2)
    console.log("Akhir blok try");  // (3)
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
  }
   
  /* output
  Awal blok try
  ReferenceError
  errorCode is not defined
  ReferenceError: errorCode is not defined
      at file:///home/dicoding/Playground/javascript/CoffeeMachine/error.js:3:5
      at ModuleJob.run (internal/modules/esm/module_job.js:152:23)
      at async Loader.import (internal/modules/esm/loader.js:166:24)
      at async Object.loadESM (internal/process/esm_loader.js:68:5)


Dari informasi di atas, kita bisa tahu bahwa error yang muncul adalah ReferenceError karena errorCode dianggap 
sebagai sebuah variabel atau nilai yang tidak terdefinisi.
*/

// try-catch-finally
// Selain try dan catch, ada satu blok lagi yang ada dalam mekanisme error handling pada JavaScript, yaitu finally. 
// Blok finally akan tetap dijalankan tanpa peduli apa pun hasil yang terjadi pada blok try-catch.

try {
  console.log("Awal blok try");
  console.log("Akhir blok try");
} catch (error) {
  console.log("Baris ini diabaikan");
} finally {
  console.log("Akan tetap dieksekusi");
}
 
/* output
Awal blok try
Akhir blok try
Akan tetap dieksekusi
*/


// bagaimana jika json string tidak sesuai dengan format object JavaScript?

const jsons = '{ bad json }';
 
try {
  const user = JSON.parse(jsons);
 
  console.log(user.name);
  console.log(user.age);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}
 
 
/* output
SyntaxError
Unexpected token b in JSON at position 2
*/


// bagaimana jika json yang didapat adalah seperti ini?

const json = '{ "age": 20 }';
 
try {
  const user = JSON.parse(json);
 
  console.log(user.name); // undefined
  console.log(user.age);  // 20
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}
/*
Secara sintaksis, kode di atas tidak menimbulkan eror, sehingga blok catch akan diabaikan. Namun, 
tidak adanya properti name pada json sebenarnya sama saja dengan eror karena akan berdampak pada jalannya program 
kita.

Untuk mengatasinya, kita bisa menggunakan throw. Operator ini akan “melemparkan” eror pada program, 
sehingga eksekusi kode akan masuk pada blok catch. Berikut ini adalah contoh mengimplementasikan throw untuk 
menimbulkan eror kita sendiri:*/

// const json = '{ "age": 20 }';
 
try {
  const user = JSON.parse(json);
 
  if (!user.name) {
    throw new SyntaxError("'name' is required.");
  }
 
  console.log(user.name); // undefined
  console.log(user.age);  // 20
} catch (error) {
  console.log(`JSON Error: ${error.message}`);
}
 
/* output
JSON Error: 'name' is required.
*/
// Ketika properti user.name tidak memiliki nilai, maka program akan menghasilkan SyntaxError. 
// Di dalamnya kita bisa menentukan pesan yang dapat membantu menjelaskan apa eror yang terjadi.


// Sekarang anggaplah json sudah sesuai, tetapi ternyata ada eror lain yang terjadi, misalnya karena variabel yang 
// belum terdefinisi.

// const json = '{ "name": "Yoda", "age": 20 }';
 
try {
  const user = JSON.parse(json);
 
  if (!user.name) {
    throw new SyntaxError("'name' is required.");
  }
 
  errorCode;
 
  console.log(user.name); // Yoda
  console.log(user.age);  // 20
} catch (error) {
  console.log(`JSON Error: ${error.message}`);
}
 
/* output
JSON Error: errorCode is not defined
*/
// Eror berhasil ditangani, tetapi konsol tetap menampilkan pesan “JSON Error”, lantas bagaimana kita bisa 
// menampilkan pesan eror sesuai eror yang muncul?


//pake if instanceof
try {
  // ...
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log(`JSON Error: ${error.message}`);
  } else if (error instanceof ReferenceError) {
    console.log(error.message);
  } else {
    console.log(error.stack);
  }
}