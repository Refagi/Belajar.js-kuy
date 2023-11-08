
// Problem
// Diberikan sebuah function bandingkanAngka(angka1, angka2) yang menerima dua parameter angka. 
// Function akan me-return nilai true jika angka2 lebih besar dari angka1, dan false jika sebaliknya. 
// Jika kedua angka bernilai sama, function akan me-return -1.

// function bandingkanAngka(angka1, angka2) {
//     if (angka1 < angka2 || angka2 > angka1){
//        return true
//     } else if (angka1 === angka2){
//         return -1
//     } else {
//         return false
//     }
//     //code disini
//   }
    
//     // TEST CASES
//     console.log(bandingkanAngka(5, 8)); // true
//     console.log(bandingkanAngka(5, 3)); // false
//     console.log(bandingkanAngka(4, 4)); // -1
//     console.log(bandingkanAngka(3, 3)); // -1
//     console.log(bandingkanAngka(17, 2)); // false


    
// // Problem
// // Diberikan sebuah function balikKata(kata) yang menerima satu parameter berupa string. 
// // Function akan me-return kata yang dibalik. Contoh, jika kata adalah "John Doe", function akan me-return "eoD nhoJ".

// function balikKata(kata) {
//     let balikKata = "";
//     for (k = kata.length -1; k >= 0; k--){
//         balikKata += kata[k]
//     }
//     return balikKata
//     // you can only write your code here!
// } 
//   // TEST CASES
//   console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
//   console.log(balikKata('John Doe')); // eoD nhoJ
//   console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
//   console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
//   console.log(balikKata('Super')); // repuS


// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu 
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(menit) {
    let hour = Math.floor (menit / 60)
    let sisaMenit = menit % 60
    if (sisaMenit < 10){
        sisaMenit = "0" + sisaMenit;
    } else {
       result = "";
    }
    return (hour + ":" + sisaMenit)
    // you can only write your code here!
}
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00




//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

// function xo(str) {
//     let strX = "";
//     let strO = "";
//     for (let k = 0; k < str.length; k++){
//         if (str[k] === "x"){
//             strX++;
//         } else if (str[k] === "o"){
//             strO++;
//         } else {
//             return null
//         }
//     }
//     return strX === strO
//     // you can only write your code here!
// }
  
//   // TEST CASES
//   console.log(xo('xoxoxo')); // true
//   console.log(xo('oxooxo')); // false
//   console.log(xo('oxo')); // false
//   console.log(xo('xxxooo')); // true
//   console.log(xo('xoxooxxo')); // true
//   console.log(xo('awokwokwok')); // contoh jika ada selain x dan o maka hasilnya null

// Problem
// Diberikan sebuah function bandingkanAngka(angka1, angka2) yang menerima dua parameter angka. 
// Function akan me-return nilai true jika angka2 lebih besar dari angka1, dan false jika sebaliknya. 
// Jika kedua angka bernilai sama, function akan me-return -1.

// function bandingkanAngka(angka1, angka2) {
//     if (angka1 < angka2 || angka2 > angka1){
//        return true
//     } else if (angka1 === angka2){
//         return -1
//     } else {
//         return false
//     }
//     //code disini
//   }
    
//     // TEST CASES
//     console.log(bandingkanAngka(5, 8)); // true
//     console.log(bandingkanAngka(5, 3)); // false
//     console.log(bandingkanAngka(4, 4)); // -1
//     console.log(bandingkanAngka(3, 3)); // -1
//     console.log(bandingkanAngka(17, 2)); // false


    
// // Problem
// // Diberikan sebuah function balikKata(kata) yang menerima satu parameter berupa string. 
// // Function akan me-return kata yang dibalik. Contoh, jika kata adalah "John Doe", function akan me-return "eoD nhoJ".

// function balikKata(kata) {
//     let balikKata = "";
//     for (k = kata.length -1; k >= 0; k--){
//         balikKata += kata[k]
//     }
//     return balikKata
//     // you can only write your code here!
// } 
//   // TEST CASES
//   console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
//   console.log(balikKata('John Doe')); // eoD nhoJ
//   console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
//   console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
//   console.log(balikKata('Super')); // repuS


// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu 
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. 
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(menit) {
    let hour = Math.floor (menit / 60)
    let sisaMenit = menit % 60
    if (sisaMenit < 10){
        sisaMenit = "0" + sisaMenit;
    } else {
       result = "";
    }
    return (hour + ":" + sisaMenit)
    // you can only write your code here!
}
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00




//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    let strX = "";
    let strO = "";
    for (let k = 0; k < str.length; k++){
        if (str[k] === "x"){
            strX++;
        } else if (str[k] === "o"){
            strO++;
        } else {
            return null
        }
    }
    return strX === strO
    // you can only write your code here!
}
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true
  console.log(xo('awokwokwok')); // contoh jika ada selain x dan o maka hasilnya null

