/*
  ================
  ASIAN GAMES GANJIL GENAP
  ================

  description: Sebuah fungsi yang akan mengembalikan berapa banyak jumlah pelanggaran lalu lintas
  yang terjadi saat asian games berlangsung. Pelanggaran akan terhitung apabila
  ada plat mobil yang melintas pada tanggal tertentu dengan nomor plat yang tidak
  sama dengan aturan ganjil genap
  
  rules:
  1. tidak boleh menggunakan built in function .filter(), .map(), .reduce()
  2. Function menerima parameter berupa tanggal dan data kendaraan yang melintas
  3. Function hanya akan bisa membaca dari tanggal 1 sampai 31 ( asumsi setiap bulan memiliki range 
    tanggal tersebut )
  4. Contoh membaca nomor plat kendaraan adalah misal B 1234 HAHA, berarti yang dilihat cukup
  angka paling belakang dari 1234 berarti 4, berati nomor plat mobil ini termasuk genap


  examples:
  JIKA INPUT DATA KENDARAAN = [{
    plat: 'B 1234 ABC',
    type: 'Mobil'
  }, {
    plat: 'A 2457 HE',
    type: 'Motor'
  }, {
    plat: 'Z 999 ERT',
    type: 'Mobil'
  }]
  DAN INPUT TANGGAL ADALAH = 18
  MAKA OUTPUTNYA ADALAH 1, yaitu hanya plat mobil Z 999 ERT karena merupakan jenis kendaraan
  mobil dan memiliki plat 'ganjil'    
*/
function ganjilGenapAsianGames(date, data) {
    let result = 0
    for (let i = 0; i < data.length; i++){
      let change1 = data[i].plat.split(' ')
      let change2 = Number(change1[1].slice(-1))//untuk mengambil angka paling akhir
      if (data[i].type === 'Mobil'){
        if (change2 % 2 === 0 && date % 2 === 1){
          result++
        } 
        else if (change2 % 2 === 1 && date % 2 === 0){
          result++
        }
      }
      console.log(change2)
    }
    if (date < 1 || date > 31){
      return 'invalid dates'
    }
    // return result
    //code here
}
    
    console.log(ganjilGenapAsianGames(30, [{
      plat: 'B 1234 ABC',
      type: 'Mobil'
    }, {
      plat: 'A 2457 HE',
      type: 'Motor'
    }, {
      plat: 'AB 87 RFS',
      type: 'Motor'
    }, {
      plat: 'Z 999 ERT',
      type: 'Mobil'
    }])) // 1
    
    console.log(ganjilGenapAsianGames(26, [{
      plat: 'A 24 HE',
      type: 'Mobil'
    }, {
      plat: 'AB 871 RFS',
      type: 'Mobil'
    }, {
      plat: 'Z 9992 ERT',
      type: 'Mobil'
    }])) // 1
    
    console.log(ganjilGenapAsianGames(1, [{
      plat: 'A 24 WE',
      type: 'Mobil'
    }, {
      plat: 'AB 871 RFS',
      type: 'Mobil'
    }, {
      plat: 'Z 9992 XOXO',
      type: 'Mobil'
    }])) // 2
    
    console.log(ganjilGenapAsianGames(1, [{
      plat: 'A 2431 HE',
      type: 'Motor'
    }, {
      plat: 'AB 8711 RFS',
      type: 'Motor'
    }, {
      plat: 'Z 999 ERT',
      type: 'Motor'
    }])) // 0
    
    console.log(ganjilGenapAsianGames(32, [{
      plat: 'X 123 HAHA',
      type: 'Mobil'
    }])) // invalid dates
    
    console.log(ganjilGenapAsianGames(0, [{
      plat: 'X 123 HAHA',
      type: 'Mobil'
    }])) // invalid dates

/*
=========
HACKATHON
=========

[INSTRUCTION]
Buatlah suatu aplikasi untuk membuat catatan ekonomi.

[EXAMPLE]
"bank account sudah disediakan"

input: [['Jeff Bezos+5%', 'Larry Page+10%', 'Jeff Bezos-3%'], ['Larry Page+2%', 'Larry Page-1%']]
process:
  bank account => deposit atas nama Jeff Bezos ditambah 5%, menjadi 105000
  bank account => deposit atas nama Larry Page ditambah 10%, mejadi  104500
  bank account => deposit atas nama Jeff Bezos dikurangi 3%, mejadi 101850
  ...dst
output:
  [
    { name: 'Jeff Bezos', deposit: 105000, owner: 'Amazon' },
    { name: 'Larry Page', deposit: 104500, owner: 'Google' },
    { name: 'Jeff Bezos', deposit: 101850, owner: 'Amazon' },
    { name: 'Larry Page', deposit: 106590, owner: 'Google' },
    { name: 'Larry Page', deposit: 105524.1, owner: 'Google' }
  ]

[RULES]
- Dilarang menggunakan .indexOf(), .split(), .filter(), .map(), dan .slice()
*/

function economyChangeSummary(tradeActivity) {
  let duitJeff = 100000
  let duitLarry = 95000
  let duitJack = 90000

  let result = []
  for (let i = 0; i < tradeActivity.length; i++){
    for (let j = 0; j < tradeActivity[i].length; j++){
     let obj = {}
      let changeName = ''
      for (let k = 0; k < tradeActivity[i][j].length; k++){
        changeName += tradeActivity[i][j][k]
        if (tradeActivity[i][j][k+1] === '+' || tradeActivity[i][j][k+1] === '-' )
        break
      }
     let money = 0
     if (changeName === 'Jeff Bezos'){
      money = duitJeff
     } else if ( changeName === 'Larry Page'){
      money = duitLarry
     } else if (changeName === 'Jack Ma'){
      money = duitJack
     }

     let persen = /\d+/gi
     let result1 = parseInt(tradeActivity[i][j].match(persen))
     let aritmatika = /[+-]/gi
     let result2 = tradeActivity[i][j].match(aritmatika).toString()
    
     let deposit = 0
     if (result2 === '+'){
      deposit = money + (money * (result1 / 100))
      if (changeName === 'Jeff Bezos'){
        duitJeff = deposit
      } else if (changeName === 'Larry Page'){
        duitLarry = deposit
      } else if (changeName === 'Jack Ma'){
        duitJack = deposit
      }
     } else {
      deposit = money - (money * (result1 / 100))
      if (changeName === 'Jeff Bezos'){
        duitJeff = deposit
      } else if (changeName === 'Larry Page'){
        duitLarry = deposit
      } else if (changeName === 'Jack Ma'){
        duitJack = deposit
      }
     }
    // console.log(deposit)
    let owner = ''
    if (changeName === 'Jeff Bezos'){
      owner = 'Amazon'
    } else if (changeName === 'Larry Page'){
      owner = 'Goggle'
    } else if (changeName === 'Jack Ma'){
      owner = 'Alibaba'
    }
    // console.log(owner)
    obj = {
      name : changeName,
      deposit : deposit,
      owner : owner,
    }
    result.push(obj)
    }
  }
  return result
  // return arr1
}


console.log(economyChangeSummary([
  ['Jeff Bezos+5%', 'Larry Page+10%', 'Jeff Bezos-3%'],
  ['Larry Page+2%', 'Larry Page-1%'],
  ['Jack Ma+4%'],
  ['Larry Page-8%', 'Jack Ma+20%', 'Jeff Bezos-3%', 'Jeff Bezos+8%']
]));
/* 
  [ { name: 'Jeff Bezos', deposit: 105000, owner: 'Amazon' },
  { name: 'Larry Page', deposit: 104500, owner: 'Google' },
  { name: 'Jeff Bezos', deposit: 101850, owner: 'Amazon' },
  { name: 'Larry Page', deposit: 106590, owner: 'Google' },
  { name: 'Larry Page', deposit: 105524.1, owner: 'Google' },
  { name: 'Jack Ma', deposit: 93600, owner: 'Alibaba' },
  { name: 'Larry Page', deposit: 97082.172, owner: 'Google' },
  { name: 'Jack Ma', deposit: 112320, owner: 'Alibaba' },
  { name: 'Jeff Bezos', deposit: 98794.5, owner: 'Amazon' },
  { name: 'Jeff Bezos', deposit: 106698.06, owner: 'Amazon' } ]
*/
console.log("==============================================================================");

console.log(economyChangeSummary([
  ['Jeff Bezos-10%']
]))
/*
  [ { name: 'Jeff Bezos', deposit: 90000, owner: 'Amazon' } ]
*/


/*
=======================
Initial Object Grouping
=======================
​
[INSTRUCTION]
​
Disediakan sebuah function initialObjectGrouping yang bertugas untuk menerima sebuah parameter
berupa array satu dimensi berisikan nama-nama. Function initialObjectGrouping akan
mengelompokkan nama-nama tersebut berdasarkan huruf depannya dan dipisahkan ke dalam
sebuah object.
[EXAMPLE]
Input: ['Budi', 'Badu', 'Joni', 'Jono']
Proses:
Huruf depan yang ditemukan: B dan J
Pisahkan nama yang depannya B, dan nama yang depannya J. Masukkan ke object berdasarkan huruf Awal nama
{
  B: ['Budi', 'Badu'],
  J: ['Joni', 'Jono']
}
[CONSTRAINTS]
Dilarang menggunakan sintaks Set atau Regex
*/
function initialObjectGrouping(studentsArr) {
  
  let obj = {}
  for (let i = 0; i < studentsArr.length; i++){
   if (obj[studentsArr[i][0]] === undefined){
    obj[studentsArr[i][0]] = [studentsArr[i]]
   } else {
    obj[studentsArr[i][0]].push(studentsArr[i])
   }
  }
  return obj
  //CODE HERE
}
console.log(initialObjectGrouping(['Budi', 'Badu', 'Joni', 'Jono']));
/*
{
  B: [ 'Budi', 'Badu' ],
  J: [ 'Joni', 'Jono' ]
}
*/
console.log(initialObjectGrouping(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
/*
{
  M: [ 'Mickey' ],
  Y: [ 'Yusuf' ],
  D: [ 'Donald' ],
  A: [ 'Ali' ],
  G: [ 'Gong' ]
}
*/
console.log(initialObjectGrouping(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
/*
{
  R: [ 'Rock', 'Rocker' ],
  S: [ 'Stone', 'Sticker' ],
  B: [ 'Brick' ]
}
*/


/*
Function travelingIndonesia akan mengembalikan nilai sebuah string suatu perjalanan seseorang
di kota-kota besar yang ada di Indonesia.

Secara berturut-turut rute akan berlangsung ;
Yogyakarta > Semarang > Surabaya > Denpasar

Rute tersebut berlaku arah sebaliknya.
Traveller dapat menggunakan transportasi yang disediakan oleh
Pemerintah yaitu berupa :

- Pesawat, biayanya 275000
- Kereta, biayanya 250000
- Bis, biayanya 225000

Biaya tersebut berlaku untuk jarak 1 kota saja.

Dikarenakan traveller berkeliling Indonesia bertepatan dengan digalakkannya visit Indonesia
Maka traveller akan mendapatkan diskon menggunakan metode pembayaran tertentu;

- OVO > akan mendapatkan diskon 15% setiap kota
- Dana > akan mendapatkan diskon 10% setiap kota
- Gopay > akan mendapatkan diskon 5% setiap kota
- Cash > normal;

Function tersebut akan mengembalikan siapa yang mengeluarkan biaya paling besar (sudah termasuk diskon);

Note:
1. Hanya boleh menggunakan built in function .push();
*/

function travelingIndonesia(arr, emoney) {
  let arr1 = []
  let arr2 = []
  let arr3 = []
  for (let i = 0; i < arr.length; i++){
    let nama = ''
    for (let j = 0; j < arr[i].length; j++){
      nama += arr[i][j]
      if (arr[i][j+1] === '-'){
        break
      }
    }
    // console.log(nama)
    let awal = ''
    for (let k = nama.length + 1; k < arr[i].length; k++){
      awal += arr[i][k]
      if (arr[i][k+1] === '-'){
        break
      }
    }
    // console.log(awal)
    let tujuan = ''
    for (let h = nama.length + awal.length + 2 ; h < arr[i].length; h++){
      tujuan += arr[i][h]
      if (arr[i][h+1] === '-'){
        break
      }
    }
    // console.log(tujuan)
    let transport = ''
    for (let l = nama.length + awal.length + tujuan.length + 3; l < arr[i].length; l++){
      transport += arr[i][l]
    }
    // console.log(transport)

    let tempat = ['Yogyakarta', 'Semarang', 'Surabaya', 'Denpasar']
      let jarak1 = 0
      let jarak2 = 0
      for (let k = 0; k < tempat.length; k++){
        if (awal === tempat[k]){
          jarak1 = k
        }
        if (tujuan === tempat[k]){
          jarak2 = k
        }
      }
      let totalJarak = Math.abs(jarak2 - jarak1 || jarak1 - jarak2)
      // console.log(jarak2)


    let hargaAwal = 0
        if (transport === 'Pesawat'){
         hargaAwal = (275000 * totalJarak) 
        } else if (transport === 'Kereta'){
          hargaAwal = (250000 *  totalJarak) 
        } else if (transport === 'Bis'){
          hargaAwal = (225000 *  totalJarak) 
        }
    let diskon = 0
        if (emoney === 'OVO'){
          diskon = hargaAwal - (hargaAwal * (15 / 100))
        } else if (emoney === 'Dana'){
          diskon = hargaAwal - (hargaAwal * (10 / 100))
        } else if (emoney === 'Gopay'){
          diskon = hargaAwal - (hargaAwal * (5 / 100))
        } else if ( emoney === 'Cash'){
          diskon = hargaAwal
        }

      // console.log(diskon)
      arr1.push(diskon)
      for (let i = 0; i < arr1.length; i++){
        for (let j = 0; j < arr1.length - 1; j++){
          if (arr1[j] < arr1[j + 1]){
            let result = arr1[j]
            arr1[j] = arr1[j + 1]
            arr1[j + 1] = result
         }
        }
      }
  
      // console.log(arr1)
      let obj = {
         name: nama,
         departureCity: awal,
         destinationCity: tujuan,
         transport: transport,
         totalCost: diskon,
      }
      // console.log(obj)
      arr2.push(obj)
  }
  for (let k = 0 ; k < arr1.length; k++){
    for (let h = 0; h < arr2.length; h++){
      if (arr1[k] === arr2[h].totalCost){
        arr3.push(arr2[h])
      }
    }
  }
  return arr3
  //code here
};

console.log(travelingIndonesia(['Danang-Yogyakarta-Semarang-Bis', 'Alif-Denpasar-Surabaya-Kereta', 
'Bahari-Semarang-Denpasar-Pesawat'], 'OVO'));
/*
[ { name: 'Bahari',
    departureCity: 'Semarang',
    destinationCity: 'Denpasar',
    transport: 'Pesawat',
    totalCost: 467500 },
  { name: 'Alif',
    departureCity: 'Denpasar',
    destinationCity: 'Surabaya',
    transport: 'Kereta',
    totalCost: 212500 },
  { name: 'Danang',
    departureCity: 'Yogyakarta',
    destinationCity: 'Semarang',
    transport: 'Bis',
    totalCost: 191250 } ]
*/
console.log("==================================================================================================");
console.log(travelingIndonesia(['Shafur-Surabaya-Yogyakarta-Kereta', 'Taufik-Semarang-Surabaya-Pesawat', 
'Alex-Yogyakarta-Semarang-Kereta'], 'Dana'));
// /*
// [ { name: 'Shafur',
//     departureCity: 'Surabaya',
//     destinationCity: 'Yogyakarta',
//     transport: 'Kereta',
//     totalCost: 450000 },
//   { name: 'Taufik',
//     departureCity: 'Semarang',
//     destinationCity: 'Surabaya',
//     transport: 'Pesawat',
//     totalCost: 247500 },
//   { name: 'Alex',
//     departureCity: 'Yogyakarta',
//     destinationCity: 'Semarang',
//     transport: 'Kereta',
//     totalCost: 225000 } ]
// */
console.log("==================================================================================================");
console.log(travelingIndonesia(['Andika-Denpasar-Surabaya-Bis', 'Katy-Surabaya-Denpasar-Pesawat'], 'Gopay'));
// /*
// [ { name: 'Katy',
//     departureCity: 'Surabaya',
//     destinationCity: 'Denpasar',
//     transport: 'Pesawat',
//     totalCost: 261250 },
//   { name: 'Andika',
//     departureCity: 'Denpasar',
//     destinationCity: 'Surabaya',
//     transport: 'Bis',
//     totalCost: 213750 } ]
// */
console.log("==================================================================================================");
console.log(travelingIndonesia(['Putra-Denpasar-Yogyakarta-Pesawat'], 'Cash'));
// /*
// [ { name: 'Putra',
//     departureCity: 'Denpasar',
//     destinationCity: 'Yogyakarta',
//     transport: 'Pesawat',
//     totalCost: 825000 } ]
// */
console.log(travelingIndonesia([], 'Cash')); // [];


/**
Delete Undefined Keys
=====================
Implementasikan function `deleteUndefinedKeys` untuk menghapus
key di dalam object yang memiliki value undefined.

Function ini akan menerima satu parameter yaitu `data`
yang memiliki tipe data array.
Di dalam array `data` terdapat beberapa object yang memiliki
value undefined. Tugas kamu adalah untuk menghapus key tersebut

# Contoh I/O
Contoh input dan output bisa kamu lihat di test case

# Kondisi khusus
- Jika tidak ada elemen di dalam `data`, maka tampilkan 'No data'

CONSTRAINTS
============
- DILARANG menggunakan built-in function .map, .filter

*/

function deleteUndefinedKeys(data) {
  
 for (let i = 0; i < data.length; i++){
  for (let key in data[i]){
    if (data[i][key] === undefined){
      delete data[i][key]
    }
  }
}
if (data.length === 0){
  return 'No data'
}
 return data
  //code here
}

console.log(deleteUndefinedKeys([{
    name: 'Dimitri',
    address: undefined,
    email: 'dimitri@mail.com',
    age: undefined,
    gender: 'male'
  },
  {
    name: 'Alexei',
    address: 'Earth',
    email: undefined,
    age: 18,
    gender: 'male'
  }
]));
/*
  [ { name: 'Dimitri', email: 'dimitri@mail.com', gender: 'male' },
    { name: 'Alexei', address: 'Earth', age: 18, gender: 'male' } ]
*/

console.log(deleteUndefinedKeys([{
    band: 'Ghost',
    formed: 2006,
    members: ['Papa Emeritus', 'Alpha', 'Omega', 'Water', 'Wind', 'Earth'],
    genre: 'Heavy Metal',
    rating: undefined
  },
  {
    band: 'BABYMETAL',
    formed: undefined,
    members: ['SU-METAL', 'MOAMETAL', 'YUIMETAL'],
    genre: 'Kawaii Metal',
    rating: undefined
  },
  {
    band: 'Avatar',
    formed: 2006,
    members: undefined,
    genre: undefined,
    rating: 5
  }
]));
/*
[ { band: 'Ghost',
    formed: 2006,
    members: [ 'Papa Emeritus', 'Alpha', 'Omega', 'Water', 'Wind', 'Earth' ],
    genre: 'Heavy Metal' },
  { band: 'BABYMETAL',
    members: [ 'SU-METAL', 'MOAMETAL', 'YUIMETAL' ],
    genre: 'Kawaii Metal' },
  { band: 'Avatar', formed: 2006, rating: 5 } ]
*/

console.log(deleteUndefinedKeys([]));
// No data



