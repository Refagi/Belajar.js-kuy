
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

