
// function myFuction(){
//     return "Hello World" //nilai pada fungsi
// }

// console.log(myFuction())

// function cek(){
//     console.log("cek")
// }
// cek()
// // return memberikan nilai pada fungsi, kalau tidak ada return pada fungsi maka fungsi meiliki nilai undifined

// function myFuction1(a1,a2){// fungsi memiliki parameter berapapun itu
//     return a1 * a2
// }
// console.log(myFuction1(5,5))
// console.log(myFuction1(5,6))
// console.log(myFuction1(7,5))
// // lalu bisa menghasilkan banyak output

// function balikNama(nama){
//     let balikNama = "";
//     for(k = nama.length -1; k >= 0; k-- ){
//         balikNama += nama[k];
//     }
//     return balikNama;
// }
// console.log(balikNama("asep"))
// console.log(balikNama("udin"))
// console.log(balikNama("yayah"))
// // contoh fungsi membalikan nama dengan loop

// function namaLengkap(nama){
//     let result = "";
//     for(let h = 0; h < nama.length; h++){
//         if(h === 2 || nama[h-2] === ' '){
//             result += nama[h].toUpperCase() // toUpperCase itu mengubah huruf kecil jadi huruf besar
//         } else {
//             result += nama[h]
//         }
//     }
//     return result
// }
// console.log(namaLengkap("reno faza givaro"))
// console.log(namaLengkap("monkey D luffy"))
// console.log(namaLengkap("gold D ace"))


// let tanggal = "13";
// function date(){
   
//     if (tanggal !== 12){
//        console.log("salah")
//     } else {
//         console.log("benar")

//     }
// }
// date()


// Tugas 1
// Buatlah sebuah fungsi bernama shoutOut(), yang mengembalikan nilai berupa "Halo Function!", 
// yang kemudian akan ditampilkan di console.

//bikin fungsinya disini

// console.log(shoutOut());
function shoutOut(){
    return "Halo Function!"
}
console.log(shoutOut())

// Tugas 2
// Buatlah sebuah fungsi bernama calculateMultiply(), yang mengembalikan nilai berupa hasil kali dari 
// dua parameter yang dikirim.

//bikin fungsinya disini

function calculateMultiply(num1,num2){
    return num1 * num2
// console.log(hasilPerkalian);
}
let num1 = 8
let num2 = 5
let hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);


// Tugas 3
// Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi 
// satu kalimat berikut: 
// "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

//bikin fungsinya disini

//bikin fungsinya disini

let name1 = "Agus";
let age1 = 30;
let address1 = "Jln. Malioboro, Yogjakarta";
let hobby1 = "gaming!";
let fullSentence1 = processSentence(name,age,address,hobby);
function processSentence(name, age, address, hobby){
    return `Nama saya ${name1}, Umur saya ${age1} tahun, Alamat saya di ${address1}, dan Saya punya hobby yaitu ${hobby1}`
}
console.log(fullSentence1); 