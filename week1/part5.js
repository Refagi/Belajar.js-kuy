 // Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu nama dan peran. Variabel peran harus memiliki isi data, 
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)


// let nama = "", peran = "";

//code disini gunakan console.log untuk outputnya
 
 
//  let nama = "Hiraouka";
//  if (nama === ""){
//     console.log("nama wajib diisi")
// } else {
//     console.log("nama sudah benar")
// }

//  if (nama === ""){
//     console.log(`nama wajib diisi`)
// } else {
//     console.log(`nama sudah benar")
// }
let nama = "";
let peran = "";
if (nama === ""){
   console.log(`nama wajib diisi`)
} else if (peran === ""){
   console.log(`${nama} pilih peranmu untuk memulai game`)
} else if (peran === "Ksatria"){
   console.log(`halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`)
} else if (peran === "Tabib"){
   console.log(`halo Tabib ${nama} ,  kamu akan membantu temanmu yang terluka`)
} else if (peran === "penyihir"){
   console.log(`halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!`) 
} else {
   console.log(`tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`)
}


// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

// let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
// let bulan = "februari"; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
// let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini


let Tanggal = "28";
let Bulan = "12";
let Tahun = "2004";
let fulldate = Tanggal + ' ' + Bulan + ' ' + Tahun

if (Tanggal >= 1 && Tanggal <= 31 && Tahun >= 1900 && Tahun <= 2200){
switch (Bulan){              
   case "1":
    Bulan = "januari"
    break;
   case "2":
    Bulan = "februari"
    break;
   case "3":
    Bulan = "maret"
    break;  
   case "4":
    Bulan = "april"
    break;     
   case "5":
    Bulan = "mei"
    break;    
   case "6":
    Bulan = "juni"
    break;
   case "7":
    Bulan = "juli"
    break;
   case "8":
    Bulan = "agustus"
    break;
   case "9":
    Bulan = "september"
    break;
   case "10":
    Bulan = "oktober"
    break;
   case "11":
    Bulan = "november"
    break;
   case "12":
    Bulan = "desember"
    break;
   default:
    Bulan = "date is wrong";
    break;

} 
} else {
   console.log("date is wrong")
}

console.log(Tanggal + ' ' + Bulan + ' ' + Tahun)
console.log(fulldate)
