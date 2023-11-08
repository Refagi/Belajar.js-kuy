// macam-macam variable
var a = '1';
let b = '2';
const c = '3';

//  variable dapat menampung tipe data string(text), integet/number, boolean, array, object
let umur = 100; //number
let animal = 'lion'; //string(text)
let apakahbetul = true;//boolean (true or false)
let decimal = 200.50;//number tapi ada koma(.)

// operasi aritmatika
let angka1 = 50;
let angka2 = 10;
console.log(angka1 + angka2);
console.log(angka1 - angka2);
console.log(angka1 * angka2);
console.log(angka1 / angka2);
console.log(angka1 % angka2);

//  mengisi variable
let penampungHasilOperatorAritmatika = angka1 + angka2;
console.log(penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1 - angka2;
console.log(penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1 * angka2;
console.log(penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1 / angka2;
console.log(penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1 % angka2;
console.log(penampungHasilOperatorAritmatika);

// string bisa ditambah tetapi tidak bisa dikurang(menggunakan operasi aritmatika)
let firstname = 'Reno faza';
let lastname = 'Givaro';
let fullname = firstname + ' ' + lastname;
console.log(fullname);
console.log(firstname + ' ' + lastname);
console.log(firstname - lastname);

// untuk membaca code itu dari kiri ke kanan dan dari atas kebawah
let number = 15;
console.log(number + 15);
number = 20;
console.log(number + 20);
// jadi false itu nilainya = 0 jadi (false + 10 = 10), kalau true = 1 (true + 20 = 21)
number = false;
console.log(number + 10);
console.log(true + 20);

// contoh error
// const name = 'kutu';
// console.log(name);
// name = 'monyet';
// console.log(name);

// pake let atau const saja karena yang paling sering dipakai
// let bisa diubah sedangkan const tidak bisa
// komentar menggunakan (ctrl + /)

