//Promise Static Method

// Promise.all
// Promise.all() digunakan untuk mengeksekusi banyak Promise secara paralel. Method ini menerima sebuah array yang 
// berisi beberapa Promise sebagai argumen. Fungsi ini akan mengembalikan sebuah Promise baru dan membawa nilai 
// yang di-resolve dalam masing-masing Promise yang diletakkan pada array argumen.

// Berikut adalah contoh penggunaan Promise.all().

const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.all([promise1, promise2, promise3]).then((values) => console.log(values)); // [1, 2, 3] setelah 3 detik


// Jika terdapat rejection pada salah satu Promise, Promise.all() akan langsung menghasilkan rejected tanpa 
// mengembalikan nilai Promise lain yang statusnya fulfilled. Berikut contohnya.


// const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
// const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('ups')), 2000));
// const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.all([promise1, promise2, promise3])
  .then((values) => console.log(values))
  .catch((error) => console.log(error.message)); // ups

  /**Promise.race
Promise.race() digunakan untuk mengeksekusi beberapa Promise secara paralel seperti Promise.all(). 
Namun, ia hanya mengembalikan nilai Promise yang paling cepat menyelesaikan eksekusinya. */

// const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
// const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
// const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.race([promise1, promise2, promise3])
  .then((value) => console.log(value)); // 1 setelah 1 detik

  /**Lalu, bagaimana jika salah satu Promise ada yang rejected? Jika proses rejection merupakan proses yang 
   * paling cepat, ia akan mengembalikan rejection tersebut. Jika rejection tidak kalah cepat dengan proses 
   * lain yang nilainya fulfilled, ia akan tetap mengembalikan nilai resolved tercepat. */

//   const promise1 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('ups')), 1000));
// const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
// const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.race([promise1, promise2, promise3])
  .then((value) => console.log(value))
  .catch((error) => console.log(error.message)); // Ups


//   Promise.allSettled
// Promise.allSettled() bekerja mirip seperti Promise.all(). Namun, Promise.allSettled() mengembalikan seluruh hasil 
// dari Promise yang dieksekusi dalam bentuk array of object dengan format berikut.

// {
//   status: 'fulfilled' | 'rejected',
//   value: 'value of the Promise',
//   reason: 'error of the Promise',
// }

/**Dari struktur objek yang dihasilkan, Anda bisa melihat bahwa Promise.allSettled() akan mengembalikan seluruh 
 * nilai Promise yang dijalankan, baik yang statusnya fulfilled ataupun rejected.

Berikut contoh penggunaan Promise.allSettled(). */

// const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
// const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("Error")), 2000));
// const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.allSettled([promise1, promise2, promise3])
 .then((results) => console.log(results));
// [{status: "fulfilled", value: 1}, {status: "rejected", reason: Error}, {status: "fulfilled", value: 3}] setelah 3 detik


/**Promise.any
Method Promise terakhir yang akan kami bahas adalah Promise.any(). Cara kerja method ini mirip seperti 
Promise.race(), tetapi hanya mengembalikan nilai tercepat yang berstatus fulfilled. Jika seluruh Promise 
berstatus rejected, method ini akan mengembalikannya dengan pesan “All Promises were rejected”. */

// fulfilled sample
const promiseResolve1 = new Promise((resolve, reject) => setTimeout(() => resolve("1"), 1000));
const promiseResolve2 = new Promise((resolve, reject) => setTimeout(() => resolve("2"), 2000));
const promiseResolve3 = new Promise((resolve, reject) => setTimeout(() => resolve("3"), 3000));

Promise.any([promiseResolve1, promiseResolve2, promiseResolve3])
 .then((value) => console.log(value)) // 1
 .catch((error) => console.log(error.message));

// rejected sample
const promiseReject1 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('1')), 1000));
const promiseReject2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('2')), 2000));
const promiseReject3 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("3")), 3000));

Promise.any([promiseReject1, promiseReject2, promiseReject3])
 .then((value) => console.log(value))
 .catch((error) => console.log(error.message)); // All Promises were rejected