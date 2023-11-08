
/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. 
Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, 
dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. 
Contoh, 'katak' dibalik tetaplah 'katak'.
*/

function palindrome(kata) {
    let katKata = kata;
    let cekKata = katKata.toString();//jadikan string
  
    for (let i = 0; i < cekKata.length; i++) { //iterasi dari depan
      for (k = cekKata.length - 1; k > 0; k--) {// iterasi dari belakang
        if (cekKata[i] === cekKata[k]) {
          return true;
        } else {
          return false;
        }
      }
    }
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(palindrome("katak")); // true
  console.log(palindrome("blanket")); // false
  console.log(palindrome("civic")); // true
  console.log(palindrome("kasur rusak")); // true
  console.log(palindrome("mister")); // false
  
  /*
  Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.
  
  note kenapa angka 8 adalah palindrome? karena angka 8 dibalik tetep 8 wkwkw
  note kenapa angka 343 adalah palindrome? karena angka 343 dibalik tetep 343 eaaaa
  */
  
  function angkaPalindrome(num) {
    let k = num + 1;
    for (;;) {
      //pake ini agar infinite loop
      let cekNum = k.toString();//jadikan string untuk dijadikan perbandingan dengan hasil loop
      let result = "";
      for (let k = cekNum.length - 1; k >= 0; k--) {
        //dicek / dilooping dari belakang
        result += cekNum[k];// result = result + cekNum[k]
      }
      if (result === cekNum) {//jika hasil looping dari belakang sama dengan variable cekNum yang dijadikan string
        return k;
      } else {
        k++; //agar mencari angka selanjutnya yang polindrom
      }
    }
  
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
  
  
  
  
  
  function hitungJumlahKata(kalimat) {
    let cek = 0;
    let cekKalimat = kalimat.split(' ')//kita pecah menjadi array contoh [ 'I', 'have', 'a', 'dream' ] 
                        
    for (let i = 0; i < cekKalimat.length; i++){
      if (cekKalimat[i] !== ' ' ){//menghitung kalimat yang bukan spasi
        cek++;
      }
    }
    return cek
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream knawbf')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5
  
  
  
  
  function pasanganTerbesar(num) {
    let cekString = num.toString() 
    let cek1 = "";
    for (j = 0; j < cekString.length; j++){
      let terbesar = cekString[j] + cekString[j + 1]// hasil cekString[j] = 7 + hasil cekString[j + i] = 3
      if(terbesar > cek1){
        cek1 = terbesar
      }
    } 
    // you can only write your code here!
    return cek1
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
  //jadi, let terbesar = cekString[j] + cekString[j + 1] akan menghasilkan angka berpasangan
  //miasl 641573 menjadi 64, 15, 73, lalu cari  yg paling besar yaitu 73 

/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. 
Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, 
dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. 
Contoh, 'katak' dibalik tetaplah 'katak'.
*/

function palindrome(kata) {
    let katKata = kata;
    let cekKata = katKata.toString();//jadikan string
  
    for (let i = 0; i < cekKata.length; i++) { //iterasi dari depan
      for (k = cekKata.length - 1; k > 0; k--) {// iterasi dari belakang
        if (cekKata[i] === cekKata[k]) {
          return true;
        } else {
          return false;
        }
      }
    }
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(palindrome("katak")); // true
  console.log(palindrome("blanket")); // false
  console.log(palindrome("civic")); // true
  console.log(palindrome("kasur rusak")); // true
  console.log(palindrome("mister")); // false
  
  /*
  Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.
  
  note kenapa angka 8 adalah palindrome? karena angka 8 dibalik tetep 8 wkwkw
  note kenapa angka 343 adalah palindrome? karena angka 343 dibalik tetep 343 eaaaa
  */
  
  function angkaPalindrome(num) {
    let k = num + 1;
    for (;;) {
      //pake ini agar infinite loop
      let cekNum = k.toString();//jadikan string untuk dijadikan perbandingan dengan hasil loop
      let result = "";
      for (let k = cekNum.length - 1; k >= 0; k--) {
        //dicek / dilooping dari belakang
        result += cekNum[k];// result = result + cekNum[k]
      }
      if (result === cekNum) {//jika hasil looping dari belakang sama dengan variable cekNum yang dijadikan string
        return k;
      } else {
        k++; //agar mencari angka selanjutnya yang polindrom
      }
    }
  
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
  
  
  
  
  
  function hitungJumlahKata(kalimat) {
    let cek = 0;
    let cekKalimat = kalimat.split(' ')//kita pecah menjadi array contoh [ 'I', 'have', 'a', 'dream' ] 
                        
    for (let i = 0; i < cekKalimat.length; i++){
      if (cekKalimat[i] !== ' ' ){//menghitung kalimat yang bukan spasi
        cek++;
      }
    }
    return cek
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream knawbf')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5
  
  
  
  
  function pasanganTerbesar(num) {
    let cekString = num.toString() 
   
    let cek1 = "";
    for (j = 0; j < cekString.length; j++){
      let terbesar = cekString[j] + cekString[j + 1]// hasil cekString[j] = 7 + hasil cekString[j + i] = 3
      if(terbesar > cek1){
        cek1 = terbesar
      }
    } 
    
    // you can only write your code here!
    return cek1
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
//jadi, let terbesar = cekString[j] + cekString[j + 1] akan menghasilkan angka berpasangan
  //miasl 641573 menjadi 64, 15, 73, lalu cari  yg paling besar yaitu 73
  

