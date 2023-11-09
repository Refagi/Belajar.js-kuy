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

//mengubah bilangan biner, hexadesimal dan oktal kedalam bilangan desimal
let biner = 0b0110110110;
console.log(biner)//438

let hexadesimal = 0xBC
console.log(hexadesimal)//188

let oktal = 0o176
console.log(oktal)//126


//escape sequence
let enter = "reno\nfaza\ngivaro"
console.log(enter) 
/*reno
faza
givaro */

let tab = "reno\tfaza\tgivaro"
console.log(tab)//reno    faza    givaro

let petikSatu = "reno\'faza\'givaro"
console.log(petikSatu)//reno'faza'givaro

let petikDua = "reno\"faza\"givarao"
console.log(petikDua)//reno"faza"givarao

let garisMiring = "reno\\faza\\givaro"
console.log(garisMiring)//reno\faza\givaro 


/*
console method
console.info atau console.log, untuk memberi tahy informasi
console.warm, untuk memberi tahu informasi peringatan
console.error, untuk memberi tahu informasi error
console.table, untuk memberi informasi dalam bentuk table */


//ternary operator
let count = 70
let test = count >= 90 ? "bener":"salah"
console.log(test)//salah


//nullist method
let cek;
let cek2 = cek
if (cek === null || cek === undefined)
  cek2 = "waduh"
console.log(cek2)

let cekCok;
let cek3 = cekCok ?? "waduh gaes"
console.log(cek3)



let arr = [5,'']
let arrCek = arr[0] || arr[1];
console.info(arrCek)//5
/*ini mencari nilai yang true karena '' adalah false maka yg diambil adalah 5*/

let obj = {
    nama1 : 'reno',
    nama2 : `''`
}
let cekObj = obj.nama1 && obj.nama2
console.log(cekObj)//''
/*ini kebalikannya mencari nilai yang false */