// Mengubah Callback Menjadi Promise dengan Promisify

function getUsers(isOffline, callback) {
    // simulate network delay
    setTimeout(() => {
      const users = ['John', 'Jack', 'Abigail'];
    
      if (isOffline) {
        callback(new Error('cannot retrieve users due offline'), null);
        return;
      }
   
      callback(null, users);
    }, 3000);
  }
  /* 
  Pada materi sebelumnya, kita sudah mengubahnya menjadi Promise-based dengan me-refactor kode fungsi tersebut. 
  Namun, dalam skenario nyata, sering kali kita tidak memiliki akses untuk me-refactor sebuah fungsi. Contohnya 
  ketika menggunakan library pihak ketiga. Ketika menghadapi kasus tersebut, bagaimana cara termudah dalam mengubah 
  fungsi tersebut menjadi Promise-based?
  
  Node.js menawarkan solusi, yaitu menggunakan fungsi promisify dari core module util. Dengannya, kita bisa secara 
  mudah membuat fungsi baru yang mengimplementasikan Promise berdasarkan fungsi callback-based, contohnya seperti 
  ini.*/
  
  const { promisify } = require('util');
   
  function getUsers(isOffline, callback) {
    // simulate network delay
    setTimeout(() => {
      const users = ['John', 'Jack', 'Abigail'];
       if (isOffline) {
        callback(new Error('cannot retrieve users due offline'), null);
        return;
      }
   
      callback(null, users);
    }, 3000);
  }
   
  // create a Promise version of getUsers
  const getUsersPromise = promisify(getUsers);
//   Sekarang, kita memiliki fungsi getUsers(), tetapi dapat menerapkan Promise tanpa perlu mengubahnya secara manual.
  
  getUsersPromise(false)
    .then(users => console.log(users)) // ['John', 'Jack', 'Abigail']
    .catch(err => console.log(err.message));
   
  getUsersPromise(true)
    .then(users => console.log(users))
    .catch(err => console.log(err.message)); // cannot retrieve users due offline
 /* Sangat mudah, bukan? Namun, terdapat beberapa catatan ketika Anda hendak mengubah fungsi asynchronous 
  callback-based menjadi Promise-based menggunakan util.promisify().
  
  1.Promisify selalu menganggap callback berada pada argumen paling akhir sebuah fungsi asynchronous. Dengan begitu, 
  Anda tidak dapat menggunakan promisify jika callback berada di posisi awal ataupun tengah argumen.

  2.Promisify akan bekerja dengan baik jika callback memiliki struktur argumen callback(error, data). Jika callback 
  memiliki struktur argumen di luar aturan tersebut, nilai yang dibawa oleh Promise ketika fulfilled dan rejected 
  bisa tertukar.
  Catatan: Singkatnya, promisify hanya dapat digunakan pada fungsi yang mengikuti aturan Node.js callback. 
  Inilah salah satu alasan perlunya mengikuti aturan yang standar. */




  /**Dalam kasus nyata, Anda bisa gunakan promisify dalam mengubah berbagai fungsi yang disediakan Node.js menjadi 
   * Promise-based, contohnya fungsi fs.readFile() yang digunakan untuk membaca berkas secara asynchronous.
 */
  const fs = require('fs');
  const { promisify } = require('util');
  
  const readFilePromise = promisify(fs.readFile);
  
  readFilePromise('./data.txt', 'utf8')
    .then(data => console.log(data))
    .catch(err => console.log(err.message));
  


//kuis
/**
 * @TODO
 * Ubahlah fungsi asynchronous callback-based getProvinces menjadi Promise-based.
 *
 * Catatan:
 * - Anda boleh menggunakan util.promisify untuk mengubah fungsi callback-based menjadi Promise-based.
 * - Jika nama fungsinya berubah, sesuaikan nilai yang diekspor tanpa mengubah nama properti di akhir berkas ini.
 */

const { error } = require('console');
const {promisify} = require('util')

function getProvinces(countryId, callback) {
    setTimeout(() => {
      if (countryId === 'id') {
        callback(null, [
          { id: 'id-jk', name: 'Jakarta' },
          { id: 'id-bt', name: 'Banten' },
          { id: 'id-jr', name: 'Jawa Barat' },
        ]);
        return;
      }
  
      callback(new Error('Country not found'), null);
    }, 1000);
  }
  
  const changePromise = promisify(getProvinces)

  changePromise('id').then((countryId) => console.log(countryId)).catch(error => console.log(error.message)) 


  module.exports = { getProvinces: changePromise };


  //callback hell
  /**Seiring kompleksnya pengembangan aplikasi, kita akan semakin banyak menggunakan fungsi yang berjalan secara 
asynchronous. Tidak jarang kita perlu mengagregasikan banyak data dari berbagai proses asynchronous. 
Masalah akan timbul ketika sebuah proses asynchronous perlu dijalankan setelah tahapan serupa lainnya selesai. */


function getUserWeather(userId) {
    try {
      const user = getUser(userId);
      const weather = getWeather(user.location);
      return { ...user, ...weather };
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }
   
  const userWeather = getUserWeather(1);
  console.log(userWeather); // { id: 1, name: 'John Doe', location: 'Jakarta', weather: 'Sunny', temperature: 30 }

//Kode di atas menunjukkan sebuah fungsi getUserWeather() yang bertujuan untuk mendapatkan cuaca berdasarkan userId. 
//Anda juga bisa melihat bahwa data cuaca didapatkan dengan cara mengagregasi dua fungsi, yakni getUser() 
//dan getWeather(). Jika kedua fungsi tersebut berjalan secara sinkron, tentu proses agregasi akan mudah karena 
//proses berjalan secara terurut dan saling menunggu.
  
// Sekarang bayangkan jika fungsi getUser() dan getWeather() berjalan secara asinkron dan memanfaatkan pola callback. 
// Untuk menghasilkan output yang sama, kita perlu ubah kode menjadi seperti ini.

// file indexedDB.js
const { getUser, getWeather } = require('./utils');

function getUserWeather(userId, callback) {
  getUser(userId, (error, user) => {
    if (error) {
      callback(error, null);
    }

    getWeather(user.location, (error, weather) => {
      if (error) {
        callback(error, null);
      }

      callback(null, { ...user, ...weather });
    });
  });
}

getUserWeather(1, (error, userWeather) => {
    if (error) {
      console.log(error);
    }
  
    console.log(userWeather); // { id: 1, name: 'John Doe', location: 'Jakarta', weather: 'Sunny', temperature: 30 }
  })


  //file untils.js
  function getUser(id, callback) {
    setTimeout(() => {
      if (!id) {
        callback(new Error("User ID is required"), null);
      }
  
      callback(null, { id, name: 'John Doe', location: "Jakarta" });
    }, 1000);
  }
  
  function getWeather(location, callback) {
    setTimeout(() => {
      if (!location) {
        callback(new Error("Location is required"), null);
      }
  
      callback(null, { weather: "Sunny", temperature: 30 });
    }, 1000);
  }
  
  module.exports = { getUser, getWeather };


  //contoh penerapan promise pada membeli ticket bioskop
  function withDrawMoney(amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (amount > 100) {
          reject(new Error('Not enough money to withdraw'));
        }
  
        resolve(amount);
      }, 1000);
    });
  }
  
  function buyCinemaTicket(money) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (money < 10) {
          reject(new Error('not enough money to buy ticket'));
        }
  
        resolve('ticket-1');
      }, 1000);
    });
  }

  function goInsideCinema(ticket) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!ticket) {
          reject(new Error('no ticket'));
        }
  
        resolve('enjoy the movie');
      }, 1000);
    });
  }

  function watchMovie() {
    withDrawMoney(10)
      .then((money) => {
        return buyCinemaTicket(money);
      })
      .then((ticket) => {
        return goInsideCinema(ticket);
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  
  watchMovie();



  /**Asynchronous Handling dengan Sintaks Async dan Await
Sekarang mari kita bayangkan, bagaimana jika kita bisa menangani proses asynchronous layaknya proses synchronous? 
Tentunya, ini akan membuat kode kita jauh lebih ringkas dan mudah dipahami karena tidak perlu menggunakan .then() 
dan .catch() untuk mendapatkan nilainya. Untunglah harapan tersebut kini sudah terealisasi dengan hadirnya fitur 
async dan await di JavaScript versi ECMAScript 2017.

Sintaks async dan await memungkinkan kita untuk menulis kode dalam menangani proses asynchronous Promise-based 
dengan cara yang sama seperti kode synchronous. Dalam penanganan error-nya (rejection) pun kita bisa menggunakan 
try dan catch layaknya error yang dihasilkan oleh proses synchronous.
   */

async function watchMovie() {
  try {
    const money = await withDrawMoney(10);
    const ticket = await buyCinemaTicket(money);
    const result = await goInsideCinema(ticket);
 
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}
 
watchMovie();

/**Sintaks async dan await memiliki beberapa keuntungan dibandingkan dengan penggunaan callback dan Promise 
 * secara langsung.

1. Lebih mudah dipahami dan ditulis.
Sintaks async dan await memungkinkan kita untuk menulis kode yang menangani asynchronous dengan cara yang sama 
seperti synchronous. Tentu ini membuat kode lebih mudah dipahami dan ditulis.

2. Terhindar dari callback.
Penggunaan Promise secara langsung pun tidak terlepas dari callback, seperti .then() dan .catch(). 
Namun, dengan async dan await, kita bisa terlepas dari pola callback.

3. Lebih mudah dalam mengelola error.
Async dan await benar-benar membuat pengalaman asynchronous layaknya synchronous, hingga dalam penanganan 
error-nya pun menggunakan beberapa hal yang sudah ada, seperti try, catch, dan throw. */


//kuis
//infex.js
/**
 * @TODO
 * Lengkapilah kode di bawah ini agar dapat mengakses jalan tol.
 * 1. Beli kartu tol (buyTollRoadCard) -> isi argumen money dengan angka 25 -> mengembalikan objek 
 * { tollRoadCard: true, balance: 0 }.
 * 2. Isi saldo kartu tol (topUpBalance) -> isi argumen card dengan objek card yang didapat dari 
 * langkah 1 dan isi argumen amount dengan angka 10 -> mengembalikan objek { tollRoadCard: true, balance: 10 }.
 * 3. Gunakan akses jalan toll (useTollRoad) -> isi argumen card dengan objek card yang didapat dari langkah 2.
 *
 * Catatan:
 * - Anda boleh menggunakan async/await atau .then() atau .catch() atau kombinasi keduanya.
 * - Jika ada error, tampilkan error (error.message) tersebut dengan console.log.
 * - Masing-masing langkah di atas harus dijalankan secara berurutan.
 * - Masing-masing langkah akan mencetak pesan ke console.
 * - Anda bisa mengeksplorasi fungsi yang sudah disediakan di utils.js. Namun, Anda tidak boleh mengubah isi dari utils.js.
 */

const { buyTollRoadCard, topUpBalance, useTollRoad } = require('./utils');

async function getTollAccess() {
    try {
        const countBuyCard = await buyTollRoadCard(25)

        const countTopUp = await topUpBalance(countBuyCard, 10)

        const result = await useTollRoad(countTopUp)

        // console.log(countBuyCard)
        // console.log(countTopUp)
        // console.log(result)

        //bisa juga seperti ini
        // const {tollRoadCard, balance} = await buyTollRoadCard(25)
        // const {...card} = await topUpBalance({tollRoadCard, balance}, 10)
        // const result = await useTollRoad({...card})

        console.log(result)
    } catch(err) {
        console.log(err.message)
    }
    // return;
}

// Jangan hapus kode di bawah ini
 getTollAccess();


//util.js
 function buyTollRoadCard(money) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (money >= 25) {
        console.log('buying card');
        resolve({ tollRoadCard: true, balance: 0 });
        return;
      }

      reject(new Error('not enough money to buy card'));
    }, 1000);
  });
}

function topUpBalance(card, amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (card) {
        console.log('topping up balance');
        resolve({ ...card, balance: card.balance + amount });
        return;
      }

      reject(new Error('no card'));
    }, 1000);
  });
}


function useTollRoad(card) {
  const TOLL_PRICE = 10;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (card.balance < TOLL_PRICE) {
        reject(new Error('not enough balance'));
        return;
      }

      card.balance -= TOLL_PRICE;

      console.log('using toll road');
      resolve();
    }, 1000);
  });
}

module.exports = {
  buyTollRoadCard,
  topUpBalance,
  useTollRoad,
}
