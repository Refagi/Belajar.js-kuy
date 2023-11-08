// Arrow functions adalah cara singkat untuk mendefinisikan fungsi dalam JavaScript. 
// Mereka memiliki sintaks yang lebih pendek dan lebih mudah dibaca daripada fungsi biasa.
// Contoh:
// Fungsi biasa
function multiply(a, b) {
    return a * b;
  }
  
  // Arrow function
  const multiply = (a, b) => a * b;
  
  
  
  // let dan const adalah pengganti var dalam ES6. let digunakan untuk mendeklarasikan variabel yang nilainya dapat
  //  diubah, sedangkan const digunakan untuk variabel yang nilainya tidak bisa diubah setelah dideklarasikan.
  // Contoh:
  let x = 5;
  x = 10; // Nilai x bisa diubah
  
  const y = 20;
  // y = 30; // Akan menyebabkan error, karena y nilainya tidak bisa diubah
  
  // Template literals memungkinkan Anda menyisipkan variabel atau ekspresi dalam string dengan menggunakan tanda 
  // backtick (`). Ini membuat penggabungan string dan variabel lebih mudah dibaca.
  // Contoh:
  const name = 'John';
  const age = 25;
  
  const message = `Nama saya ${name} dan saya berusia ${age} tahun.`;
  console.log(message);  
  
  // Spread operator (...) dapat digunakan untuk menguraikan elemen array atau objek menjadi beberapa elemen terpisah. 
  // Rest parameter juga menggunakan sintaks yang serupa untuk mengumpulkan beberapa argumen menjadi sebuah array.
  // Contoh:
  const numbers = [1, 2, 3];
  const newArray = [...numbers, 4, 5]; // Menambahkan elemen pada array
  
  function sum(...args) {
    return args.reduce((total, num) => total + num, 0);
  }
  console.log(sum(1, 2, 3)); // Output: 6
  
  // Beberapa method baru diperkenalkan dalam ES6 untuk memanipulasi array dengan lebih efisien.
  // Contoh:
  const numbers1 = [1, 2, 3, 4, 5];
  
  const doubled = numbers1.map(num => num * 2); // Menghasilkan [2, 4, 6, 8, 10]
  
  const evenNumbers = numbers.filter(num => num % 2 === 0); // Menghasilkan [2, 4]
  
  const sum = numbers.reduce((total, num) => total + num, 0); // Menghasilkan 15
  
  
  
  