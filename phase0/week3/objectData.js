
let myObjOne = {
    myKey: 'myValue', 
  };
  console.log(myObjOne.myKey)


  const myObj = {
    nama: 'reno',
    kelas: '12',
    hobbi: ['main', 'makan', 'tidur'],
    detail: {
      tinggi: 185,
      berat: 60,
      warnaKulit: 'sawo mateng'
    }
};
console.log(myObj)
console.log(myObj.nama)
console.log(myObj.kelas)
console.log(myObj.hobbi[0])
console.log(myObj.detail.tinggi)
const detail = myObj.detail;

console.log(detail.berat)
console.log(detail.warnaKulit)


//cara memanipulasi isi object
myObj.kelakuan = 'baik';
//atau bisa seperti ini
myObj['isNolep'] = true;

//atau dengan loop
let objAngka = {};
for (let i = 1; i <= 3; i++){
    objAngka[i] = i
}
    console.log(objAngka)//{ '1': 1, '2': 2, '3': 3 }
   
 for (let i = 1; i <= 3; i++){
    console.log(objAngka[i])
}    
//1
// 2
// 3


//Cara menghapus tipe data object
delete myObj.isNolep; //atau 
delete myObj['isNolep'];


//Loop khusus untuk tipe data object
for (const key in myObj) {
  console.log(`${key}: ${myObj[key]}`);
  // kenapa masih [object object]? karena tidak dipanggil velue nya seprti [berat]
}
// nama: reno
// kelas: 12
// hobbi: main,makan,tidur
// detail: [object Object]
// kelakuan: baik

// function declaration
function buatobj (nama, kelas, npm){
  let data = {}
  data.nama = nama
  data.kelas = kelas
  data.npm = npm
  return data
}
let dataNew = buatobj('Refagi', 'R1Q', '129182353920')
console.log(dataNew)//{ nama: 'Refagi', kelas: 'R1Q', npm: '129182353920' 

//constructor
function buatobj2 (nama, kelas, npm, jurusan){
  this.nama = nama
  this.kelas = kelas
  this.npm = npm
  this.jurusan = jurusan
}
let count = new buatobj2 ('refagi', 'BB', '9121414815752', 'teknik informatika')
console.log(count)/*buatobj2 {
  nama: 'refagi',
  kelas: 'BB',
  npm: '9121414815752',
  jurusan: 'teknik informatika'
}*/

//object literal
let obj = {}
obj.data = function (){
  console.log('reno faza givaro')
  console.log('oi kiyomasa')
}
obj.data()

//menggunakan Object.create 
const dataOrang = {
  jamTidur : function(waktu){
      this.umur -= waktu
      console.log(`lama waktu tidur ${this.nama} adalah ${this.jamTidur}`)
  }
}


function data (nama, hobby, umur){
  let obj = Object.create(dataOrang)
  obj.nama = nama
  obj.hobby = hobby
  obj.umur = umur
  return obj
}
const count2 = data('Refagi', 'ngoding', 19)
console.log(count2)



//method getter and setter pada objek

//misal 
const person = {
  nama1 : 'reno',
  nama2 : 'faza',
  namalengkap : 'reno faza'
}
//kalau gini, kalau mau ubah namaLengkap harus merubah satu satu
person.nama1 = 'givaro'
person.namalengkap = person.nama1 + person.nama2
console.log(person.namalengkap)//givarofaza

//bisa juga begini pake function
const person = {
  nama1 : 'reno',
  nama2 : 'faza',
  namaLengkap : function(){
      return `${this.nama1} ${this.nama2}`
  }
}
person.nama1 = 'givaro'
console.log(person.namaLengkap())//givaro faza

//nah kalo pake cara getter gini cara panggilnya tidak usah pake function lagi
const person = {
  nama1 : 'reno',
  nama2 : 'faza',
  get namaLengkap(){
      return `${this.nama1} ${this.nama2}`
  }
}
person.nama1 = 'givaro'
console.log(person.namaLengkap)//givaro faza

//cara setter
const person = {
  nama1 : 'reno',
  nama2 : 'faza',
  get namaLengkap(){
      return `${this.nama1} ${this.nama2}`
  },
  set namaLengkap(count){
      let arr = count.split(' ')
      this.nama1 = arr[0]
      this.nama2 = arr[1]
      this.nama3 = arr[2]
  }
}
person.namaLengkap = 'reno faza givaro'
console.log(person.nama3)//givaro