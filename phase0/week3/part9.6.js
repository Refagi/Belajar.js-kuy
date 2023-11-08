
function changeMe(arr) {
    for (let i = 0; i < arr.length; i++){
     let name = arr[i][0] + " " + arr[i][1]//untuk menghasilkan nama lengkapnya
     let umur = 0;
     if ((2023 - arr[i][3]).toString() === 'NaN'){//dijasikan string agar terbaca dengan === 'NaN' nya
        umur = 'Invalid Birth Year'
     } else {
        umur = 2023 - arr[i][3]
     }
     let profile = {
        firstName: arr[i][0],
        lastName: arr[i][1],
        gender: arr[i][2],
        age: umur
     }
     console.log(`${name}:`)
     console.log(profile)
    }
    // you can only write your code here!
  }
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // Christ Evans: { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 41 } 2023 - 1982 = 41 kan yak wkwk
  // Robert Downey: { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }

  changeMe([]); // ""

/*
Diberikan sebuah function shoppingTime(memberId, money) yang menerima dua parameter berupa string dan number.
Parameter pertama merupakan memberId dan parameter ke-2 merupakan value uang yang dibawa oleh member tersebut.

Toko X sedang melakukan SALE untuk beberapa barang, yaitu:

Sepatu brand Stacattu seharga 1500000
Baju brand Zoro seharga 500000
Baju brand H&N seharga 250000
Sweater brand Uniklooh seharga 175000
Casing Handphone seharga 50000
Buatlah function yang akan mengembalikan sebuah object dimana object tersebut berisikan informasi memberId, money,
listPurchased dan changeMoney.

Jika memberId kosong maka tampilkan "Mohon maaf, toko X hanya berlaku untuk member saja"
Jika uang yang dimiliki kurang dari 50000 maka tampilkan "Mohon maaf, uang tidak cukup"
Member yang berbelanja di toko X akan membeli barang yang paling mahal terlebih dahulu dan
akan membeli barang-barang yang sedang SALE masing-masing 1 jika uang yang dimilikinya masih cukup.
Contoh jika inputan memberId: '324193hDew2' dan money: 700000

maka output:

{ memberId: '324193hDew2', money: 700000, listPurchased: [ 'Baju Zoro', 'Sweater Uniklooh' ], changeMoney: 25000 }
*/

function shoppingTime(memberId, money) {
  let sele = {// buat obj barang dan harga
    "Sepatu Stacattu": 1500000,
    "Baju Zoro": 500000,
    "Baju H&N": 250000,
    "Sweater Uniklooh": 175000,
    "Casing Handphone": 50000,
  };
  let produk = [];
  let modal = money; //masukan money ke variable untuk mengubah nama
  for (const key in sele) { //looping obj
    if (modal >= sele[key]) {//jika money lebih besar dari sele[key] sele[key] itu harga dari masing" barang
      let price = sele[key];//maka masukan harga barang" ke variable baru
      modal -= price; // model = model - price, jika money tidak lebih besar = sele[key], maka false
      produk.push(key);// masukan key, key itu nama barang" nya
    } //misal, harga barang paling murah 50000,lalu mempunyai money 60000,nah berrti masih bisa membeli satu barang 
  }//kalau money < dari 50000 maka false kan gacukup uang
  if (money < 50000) {
    return "Mohon maaf, uang tidak cukup";
  }
  let obj = {
    memberId: memberId,
    money: money,
    listPurchased: produk,
    changeMoney: modal,
  };
  if (memberId !== "" && money > 50000) {
    return obj;
  } else {
    return "Mohon maaf, toko X hanya berlaku untuk member saja";
  }

  // you can only write your code here!
}

// TEST CASES
console.log(shoppingTime("1820RzKrnWn08", 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime("82Ku8Ma742", 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime("", 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime("234JdhweRxa53", 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja



/*
Toko X yang sedang melakukan SALE ingin menghitung jumlah profit untuk setiap jenis barang
 yang terjual pada hari itu.

Barang-barang SALE yang akan dihitung penjualannya:

Sepatu brand Stacattu seharga 1500000 dan stock barang yang tesedia 10
Baju brand Zoro seharga 500000 dan stock barang yang tesedia 2
Sweater brand Uniklooh seharga 175000 dan stock barang yang tersedia 1
Function akan menerima array yang berisikan object pembeli (nama pembeli,
barang yang ingin dibeli dan jumlah barang yang dibelinya). 
Jika stock barang kurang dari jumlah yang ingin dibeli oleh pembeli maka 
pembeli batal untuk membeli barang tersebut.

Function countProfit akan mengembalikan/me-return sebuah array of object dimana 
array tersebut berisi objek-objek barang dari toko X tersebut yang berisikan info nama barang, 
siapa saja yang membeli, sisa stock barang dan total pemasukan untuk barang tersebut
*/


function countProfit(shoppers) {
  var listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
                   let result = []// nannti untuk dimasukkan object
                   for (let i = 0; i < listBarang.length; i++){//loop 1 untuk iterasi variable listBarang
                    let obj = {
                      product: listBarang[i][0],
                      shoppers: [],
                      leftOver: listBarang[i][2],
                      totalProfit: 0,
                    }
                    for (let j = 0; j < shoppers.length; j++){//loop 2 unntuk iterasi parameter function
                      if (obj.product === shoppers[j].product && obj.leftOver >= shoppers[j].amount){
                        //jika nama barang yg ada di listBarang sama dengan yg ada di parameter && 
                        //jumlah barang di listBarang lebih besar (stock lebih banyak) dari jumlah permintaan
                        obj.shoppers.push(shoppers[j].name)// makan masukan ke obj.shopper yg tadinya masih ksong[]
                        obj.leftOver -= shoppers[j].amount
                        // ubah obj.leftOver = obj.lefyOver - shooper[j].amount
                        //hasil stock barang - jumlah permintaan barang 
                        obj.totalProfit = (listBarang[i][2] - obj.leftOver) * listBarang[i][1]
                        //ubah obj.totalProfit yg masih 0 = stock barang -  obj.leftOver yg sudah di akumulasi tdi
                        //dikali (*) harga barang
                      }
                    }
                    result.push(obj)//lalu masukkan ke dalam variable result
                    if (shoppers.length === 0){
                      return []
                    }
                   }
                   return result
  // you can only write your code here!
}





// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, 
{name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, 
{name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, 
{name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, 
{name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, 
{name: 'Devi', product: 'Baju Zoro', amount: 1}, 
{name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [ 'Windi' ],
// //     leftOver: 2,
// //     totalProfit: 1200000 },
// //   { product: 'Baju Zoro',
// //     shoppers: [ 'Devi', 'Lisa' ],
// //     leftOver: 0,
// //     totalProfit: 1000000 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [ 'Rani' ],
// //     leftOver: 0,
// //     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [],
// //     leftOver: 10,
// //     totalProfit: 0 },
// //   { product: 'Baju Zoro',
// //     shoppers: [],
// //     leftOver: 2,
// //     totalProfit: 0 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [],
// //     leftOver: 1,
// //     totalProfit: 0 } ]
console.log(countProfit([])); //[]

function changeMe(arr) {
    for (let i = 0; i < arr.length; i++){
     let name = arr[i][0] + " " + arr[i][1]//untuk menghasilkan nama lengkapnya
     let umur = 0;
     if ((2023 - arr[i][3]).toString() === 'NaN'){//dijasikan string agar terbaca dengan === 'NaN' nya
        umur = 'Invalid Birth Year'
     } else {
        umur = 2023 - arr[i][3]
     }
     let profile = {
        firstName: arr[i][0],
        lastName: arr[i][1],
        gender: arr[i][2],
        age: umur
     }
     console.log(`${name}:`)
     console.log(profile)
    }
    // you can only write your code here!
  }
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // Christ Evans: { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 41 } 2023 - 1982 = 41 kan yak wkwk
  // Robert Downey: { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }

  changeMe([]); // ""

/*
Diberikan sebuah function shoppingTime(memberId, money) yang menerima dua parameter berupa string dan number.
Parameter pertama merupakan memberId dan parameter ke-2 merupakan value uang yang dibawa oleh member tersebut.

Toko X sedang melakukan SALE untuk beberapa barang, yaitu:

Sepatu brand Stacattu seharga 1500000
Baju brand Zoro seharga 500000
Baju brand H&N seharga 250000
Sweater brand Uniklooh seharga 175000
Casing Handphone seharga 50000
Buatlah function yang akan mengembalikan sebuah object dimana object tersebut berisikan informasi memberId, money,
listPurchased dan changeMoney.

Jika memberId kosong maka tampilkan "Mohon maaf, toko X hanya berlaku untuk member saja"
Jika uang yang dimiliki kurang dari 50000 maka tampilkan "Mohon maaf, uang tidak cukup"
Member yang berbelanja di toko X akan membeli barang yang paling mahal terlebih dahulu dan
akan membeli barang-barang yang sedang SALE masing-masing 1 jika uang yang dimilikinya masih cukup.
Contoh jika inputan memberId: '324193hDew2' dan money: 700000

maka output:

{ memberId: '324193hDew2', money: 700000, listPurchased: [ 'Baju Zoro', 'Sweater Uniklooh' ], changeMoney: 25000 }
*/

function shoppingTime(memberId, money) {
  let sele = {// buat obj barang dan harga
    "Sepatu Stacattu": 1500000,
    "Baju Zoro": 500000,
    "Baju H&N": 250000,
    "Sweater Uniklooh": 175000,
    "Casing Handphone": 50000,
  };
  let produk = [];
  let modal = money; //masukan money ke variable untuk mengubah nama
  for (const key in sele) { //looping obj
    if (modal >= sele[key]) {//jika money lebih besar dari sele[key] sele[key] itu harga dari masing" barang
      let price = sele[key];//maka masukan harga barang" ke variable baru
      modal -= price; // model = model - price, jika money tidak lebih besar = sele[key], maka false
      produk.push(key);// masukan key, key itu nama barang" nya
    } //misal, harga barang paling murah 50000,lalu mempunyai money 60000,nah berrti masih bisa membeli satu barang 
  }//kalau money < dari 50000 maka false kan gacukup uang
  if (money < 50000) {
    return "Mohon maaf, uang tidak cukup";
  }
  let obj = {
    memberId: memberId,
    money: money,
    listPurchased: produk,
    changeMoney: modal,
  };
  if (memberId !== "" && money > 50000) {
    return obj;
  } else {
    return "Mohon maaf, toko X hanya berlaku untuk member saja";
  }

  // you can only write your code here!
}

// TEST CASES
console.log(shoppingTime("1820RzKrnWn08", 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime("82Ku8Ma742", 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime("", 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime("234JdhweRxa53", 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja



/*
Toko X yang sedang melakukan SALE ingin menghitung jumlah profit untuk setiap jenis barang
 yang terjual pada hari itu.

Barang-barang SALE yang akan dihitung penjualannya:

Sepatu brand Stacattu seharga 1500000 dan stock barang yang tesedia 10
Baju brand Zoro seharga 500000 dan stock barang yang tesedia 2
Sweater brand Uniklooh seharga 175000 dan stock barang yang tersedia 1
Function akan menerima array yang berisikan object pembeli (nama pembeli,
barang yang ingin dibeli dan jumlah barang yang dibelinya). 
Jika stock barang kurang dari jumlah yang ingin dibeli oleh pembeli maka 
pembeli batal untuk membeli barang tersebut.

Function countProfit akan mengembalikan/me-return sebuah array of object dimana 
array tersebut berisi objek-objek barang dari toko X tersebut yang berisikan info nama barang, 
siapa saja yang membeli, sisa stock barang dan total pemasukan untuk barang tersebut
*/


function countProfit(shoppers) {
  var listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
                   let result = []// nannti untuk dimasukkan object
                   for (let i = 0; i < listBarang.length; i++){//loop 1 untuk iterasi variable listBarang
                    let obj = {
                      product: listBarang[i][0],
                      shoppers: [],
                      leftOver: listBarang[i][2],
                      totalProfit: 0,
                    }
                    for (let j = 0; j < shoppers.length; j++){//loop 2 unntuk iterasi parameter function
                      if (obj.product === shoppers[j].product && obj.leftOver >= shoppers[j].amount){
                        //jika nama barang yg ada di listBarang sama dengan yg ada di parameter && 
                        //jumlah barang di listBarang lebih besar (stock lebih banyak) dari jumlah permintaan
                        obj.shoppers.push(shoppers[j].name)// makan masukan ke obj.shopper yg tadinya masih ksong[]
                        obj.leftOver -= shoppers[j].amount
                        // ubah obj.leftOver = obj.lefyOver - shooper[j].amount
                        //hasil stock barang - jumlah permintaan barang 
                        obj.totalProfit = (listBarang[i][2] - obj.leftOver) * listBarang[i][1]
                        //ubah obj.totalProfit yg masih 0 = stock barang -  obj.leftOver yg sudah di akumulasi tdi
                        //dikali (*) harga barang
                      }
                    }
                    result.push(obj)//lalu masukkan ke dalam variable result
                    if (shoppers.length === 0){
                      return []
                    }
                   }
                   return result
  // you can only write your code here!
}





// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, 
{name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, 
{name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, 
{name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, 
{name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, 
{name: 'Devi', product: 'Baju Zoro', amount: 1}, 
{name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [ 'Windi' ],
// //     leftOver: 2,
// //     totalProfit: 1200000 },
// //   { product: 'Baju Zoro',
// //     shoppers: [ 'Devi', 'Lisa' ],
// //     leftOver: 0,
// //     totalProfit: 1000000 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [ 'Rani' ],
// //     leftOver: 0,
// //     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [],
// //     leftOver: 10,
// //     totalProfit: 0 },
// //   { product: 'Baju Zoro',
// //     shoppers: [],
// //     leftOver: 2,
// //     totalProfit: 0 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [],
// //     leftOver: 1,
// //     totalProfit: 0 } ]
console.log(countProfit([])); //[]

