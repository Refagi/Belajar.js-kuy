
// dengan metode .length untuk mengetahui jumlah isi
let nama1 = ["asep", "johan", "budi"];
console.log(nama1.length);

let nama2 = [1,2,3,4,5];
console.log(nama2.length);

//dengan metode .push untuk memasukan / menambah data  pada paling akhir
let nama3 = ["keli","panji","roy"];
nama3.push("bayo");
console.log(nama3);

let nama4 = [1,2,3,4];
nama4.push(5);
console.log(nama4)

// dengan metode .pop untuk menghapus data paling akhir
let nama5 = ["jojon", "geka", "sulis"]
nama5.pop()
console.log(nama5)

let nama6 = [1,2,3,4];
nama4.pop();
console.log(nama6)

// dengan metode .shift untuk menghapus data paling pertama / dari index 0 / paling kiri
let nama7 = ["jojo","jajay","pandi"]
nama7.shift()
console.log(nama7)

// dengan metode unshift untuk menambahkan data paling kiri / dari index 0 ? paling kiri
let nama8 = ["sentot","bebi","suep"]
nama8.unshift("alem")
console.log(nama8)

// dengan metode splice untuk menghapus data dan untuk menambahkan data bisa juga dua duanya
//contoh menghapus 1 item dari index nomor 2
//parameter pertama sebagai penentuan posisi mau di index ke berapa
// parameter kedua sebagai penentuan mau menghapus berapa data/elemen/item (bisa juga ga ngehapus apa apa kalau di kasih nilai 0)
// parameter sisanya, itu untuk nambahin data ke dalam array, jumlahnya bisa banyak
let nama9 = ["kudin", "samsul", "oden", "galang"];
nama9.splice(2,1);
console.log(nama9); // [kudin,samsul,galang]

//contoh menambahkan 1 item tanpa menghapus apa apa, dari index nomor 2
let nama10 = ["beki", "janem", "kuatno"];
nama10.splice(2,0,"mumus");
console.log(nama10); //[beki,janem,mumus,kuatno]

//contoh menambahkan 2 item dan menghapus 2 item, dari index nomor 1
let nama11 = ["sipa", "joni", "jono"];
nama11.splice(1,2,"busrok", "ipang");
console.log(nama11); 


// dengan metode slice untuk memotong data dari mana sampai mana
//simpelnya ada dua parameter slice(dari-mana, sampe-sebelum-mana)
// parameter pertama dari-mana (wkwk), itu berfungsi mau motong array dari mana
// parameter kedua sampe-sebelum-mana itu berfungsi buat ujung array yg kita potong
// boleh hanya memasang 1 parameter saja, contoh .slice(1)
let nama12 = ["bedeng", "surya", "mahmud","joek"]//[surya,mahmud,joek]
console.log(nama12.slice(1))//ini kalo mau langsung di console
//dengan cara membuat variable baru pake .slice
let splicedNama12 = nama12.slice(1)
console.log(splicedNama12)//[surya,mahmud,joek]

// atau bisa juga mau memotong dari index 2 sampai sebelum 4
let nama13 = ["juni", "iyat", "mukhlis", "son","yones"]
let splicedNama13 = nama13.slice(2,4)
console.log(splicedNama13)//[mukhlis,son]


// array 1 dimensi contoh [1,2,3,4,5,6]
// array 2 dimensi contoh [[1,2,3],[4,5,6]]

// cara akses elemen array 1 dimensi cukup misal arr[0]
// cara akses elemen array 2 dimensi cukup misal arr[0][0]

// pada array 2 dimensi karena bentukannya begini [[1,2,3],[4,5,6]
// maka bila kita melakukan indexing pada array tersebut akan menghasilkan tampilan seperti ini
let nama14 = [[1,2,3],[4,5,6]]
console.log(nama14[0]) //[1,2,3]
console.log(nama14[0].length) //3
console.log(nama14[0][0]) //1
console.log(nama14[1])// [4,5,6]
console.log(nama14[1].length) //3
console.log(nama14[1][1])//5


console.log(' ')
// kalau mau mengecek semua elemen array 2 dimensi pake loop, bisa melakukan hal berikut

let nama15 = [[1,2,3],[4,5,6],[7,8,9]];

for (let i = 0; i < nama15.length; i++){
  for (let j = 0; j < nama15[i].length; j++){
    console.log(nama15[i][j])
  }
}

console.log(' ')

let nama16 = [
  ["refagi", "cikande", "18 tahun"],
  ["faza", "jayanti", "19 tahun"]
]

for (let k = 0; k < nama16.length; k++){
  for (let h = 0; h < nama16[k].length; h++){
    if (h === 0){
    console.log(`nama saya: ${nama16[k][h]}`)
  } else if (h === 1){
    console.log(`tempat saya: ${nama16[k][h]}`)
  } else {
    console.log(`umur saya: ${nama16[k][h]}`)
  }
  }
  console.log(' ')
}

//soal dari bang dea afriza
const x = [3, 5, 12];
let result = 0;

for (let i = 0; i < x.length; i++){
   result = x[0] + x[1] + x[2]
}

console.log(result)


let i = 0;
let result2 = 0;
while(i < x.length){
    result2 = x[0] + x[1] + x[2]
    i++
}

console.log(result2)

let j = 0;
let result3 = 0;
do {
    result3 += x[j]
    j++
} while(j < x.length)
console.log(result3)