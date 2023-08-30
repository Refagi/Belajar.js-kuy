/*
Implementasikan function deepSum untuk mendapatkan jumlah pertambahan dari angka-angka yang 
terdapat di dalam array
*/

function deepSum (arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++){
   for (let j = 0; j < arr[i].length; j++){
    for (let h = 0; h < arr[i][j].length; h++){
      result += arr[i][j][h]
    }//karena array 3 dimensi maka menggunakan 3 loop.(misal [[[1, 2, 3], [4, 5, 6]]]), index(1) melooping
   }// [[[1, 2, 3], [4, 5, 6]]]), index(j) melooping [[1, 2, 3], [4, 5, 6]],index(h) melooping [1, 2, 3], [4, 5, 6]
  }
  if (arr.length === 0){
    return 'No number'
  }
  return result
    // Code disini
  }
  
  //TEST CASE
  console.log(deepSum([
    [
      [4, 5, 6],
      [9, 1, 2, 10],
      [9, 4, 3]
    ],
    [
      [4, 14, 31],
      [9, 10, 18, 12, 20],
      [1, 4, 90]
    ],
    [
      [2, 5, 10],
      [3, 4, 5],
      [2, 4, 5, 10]
    ]
  ])); // 316
  
  console.log(deepSum([
    [
      [20, 10],
      [15],
      [1, 1]
    ],
    [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      [2],
      [9, 11]
    ],
    [
      [3, 5, 1],
      [1, 5, 3],
      [1]
    ],
    [
      [2]
    ]
  ])); // 156
  
  console.log(deepSum([])); // No number



  /*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi.
Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  let ongkos = 2000;//variable untuk harga ongkos
  let result = [];//untuk memasukkan obj kesini
    for (let j = 0; j < arrPenumpang.length; j++){//loop arrPenumpang untuk mengiterasi yg ada di console.log
      let obj = {//buat obj
        penumpang: arrPenumpang[j][0],
        naikDari: arrPenumpang[j][1],
        tujuan: arrPenumpang[j][2],
        bayar: 0,
      }
        let awal = -1;//untuk mencari jarak isi dgn -1, untuk nilai awal karena belum menemukan array
        let akhir = -1;
        for (let i = 0; i < rute.length; i++){//looping variable rute 
         if (obj.naikDari === rute[i] ){//jika naikDari 'B' === rute[i] 'B' juga 
          awal = i//maka variable awal, yang tadinya -1 karena menemukan 'B' yg sama maka jdi 1,krena 'B' ada di 
          //index 1, kalau 'A' ada di index 0
         } else if (obj.tujuan === rute[i]){
          akhir = i
          // console.log(akhir)
         }
         let jarak = Math.abs(akhir - awal) * ongkos
         obj.bayar = jarak
  }
  result.push(obj)
}
return result
  //your code here
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]


//jdi pada conditional statement memriksa !scoreTerbesar[students[i].class] maksudnya itu 
//apakah sudah ada score tertinggi di dalam kelas object scoreTerbesar ,menggunakan tanda ((!)maksudnya not), 
//jika belum ada maka membuat object  baru yaitu ganti dengan name: dan scroe:, yang berisi nama dan score saat ini
//jika sbaliknya yaitu sudah ada maka bandingkan, score saat ini 
//apakah > score yang ada divariable scoreTerbesar jika lebih tinggi maka ubah dengan name: dan score: saat ini
//lebih singkatnya gini, jika belum ada score tertinggi dalam kelas saat itu yg berada di dala variable scoreTerbesar 
//maka ubah variable scoreTerbesar atau tambahkan dengan score tertinggi saat ini, jika sbeliknya yaitu sudah ada
//score tertinggi di dalam variable scoreTerbesar maka bandingkan jika score tertinggi saat ini lebih besar dari
//score yg ada di dalam scoreTerbesar
function highestScore (students) {
  let scoreTerbesar = {}
  for (let i = 0; i < students.length; i++){
   if (!scoreTerbesar[students[i].class] || students[i].score > scoreTerbesar[students[i].class].score){
    scoreTerbesar[students[i].class] = {
      name: students[i].name,
      score: students[i].score
    }
   }
}
  return scoreTerbesar
  // Code disini
}
// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }

console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}



/*
Implementasikan function graduates untuk mendapatkan daftar student yang lulus dengan aturan:

Student dapat dinyatakan lulus apabila score lebih besar dari 75.
Masukkan name dan score dari student ke class yang dia ikuti.
Student yang tidak lulus tidak perlu ditampilkan.
Output yang diharapkan berupa Object dengan format sebagai berikut:

{
  <class>: [
    { name: <name>, score: <score> },
    ...
  ],
  <class>: [
    { name: <name>, score: <score> },
    ...
  ],
  <class>: [] //NOTE: Jika tidak ada student yang lulus, class ini akan diisi oleh array kosong
}
*/
// else {
//   result[students[i].class] = [{
//     name: students[i].name,
//     score: students[i].score,
//   }]
// }
//jdi pada conditional statement jika score >= 75, maka jika kelas berada di dalam variable result atau apakah kelas
//dengan nilai >= 75 sudah berada di dalam variable result, jika suda ada maka tambahkan dgn push(name,score) 
//saat ini. jika kelas dengn score >= 75 belum ada maka buat kelas dengan (name, dan score) yg baru atau saat ini
function graduates (students) {
  let result = {}
  for (let i = 0; i < students.length; i++){
    if (students[i].score >= 75){
      if (result[students[i].class]){
        result[students[i].class].push({
          name: students[i].name,
          score: students[i].score,
        })
      } else {
        result[students[i].class] = [{
          name: students[i].name,
          score: students[i].score
        }]
      }
    } 
  }
  return result
  // Code disini
}

console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}


