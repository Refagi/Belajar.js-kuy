
function numberSum(num) {
    if(num == 1) {
      return 1;
    }
    else {
      return num + numberSum(num - 1);
    }
  }
  
  console.log(numberSum(5)); // 5 + 4 + 3 + 2 + 1 = 15

//   // Perpangkatan
function power(base, exponent) {
    if (exponent == 0)
      return 1;
    else
      return base * power(base , exponent - 1);
  }
  console.log(power(3, 3)); // 3 ** 3 = 27


// 1.Menerapkan fungsi penjumlahan menggunakan perulangan sebagai ganti rekursi.
// 2.Membuat sebuah fungsi yang mengalikan dua angka secara rekursif. Sebagai contoh, multiply(2,4) akan mengembalikan nilai 8.
//  Menulis apa yang terjadi pada setiap langkah untuk  multiply(2,4).
  let num = 4
function sum(num){
    let result = 0;
    for (let i = num; i >= 0; i--){
        result += i
    }
    console.log(result)
}
sum(num)


function multiply(a, b){
    if (b === 2){
        return a
    } else {
        return a * multiply(a, b - 1)
    }
}
console.log(multiply(2, 4))//8
//1. Panggil multiply(2, 4):
// Karena b (yaitu 4) tidak sama dengan 2, langkah rekursif dijalankan.
// Lakukan return a * multiply(a, b - 1) (2 * multiply(2, 3)).

//2. Panggil multiply(2, 3):
// Karena b (yaitu 3) tidak sama dengan 2, langkah rekursif dijalankan.
// Lakukan return a * multiply(a, b - 1) (2 * multiply(2, 2)).

//3. Panggil multiply(2, 2):
// Karena b (yaitu 2) sama dengan 2, kondisi basis tercapai.
// Mengembalikan nilai a (2).
// Kembali ke langkah sebelumnya:

// Kembali ke multiply(2, 3):
// Kita sudah mendapatkan hasil dari multiply(2, 2) yang merupakan 2.
// Lakukan return a * 2 (2 * 2) = 4.
// Kembali ke langkah sebelumnya:

// Kembali ke multiply(2, 4):
// Kita sudah mendapatkan hasil dari multiply(2, 3) yang merupakan 4.
// Lakukan return a * 4 (2 * 4) = 8.
// Sebagai hasilnya, multiply(2, 4) mengembalikan nilai 8, yang merupakan hasil dari 2 * 2 * 2 = 8.

function sumTo(n){
    if (n === 1){
        return 1;
    } else {
        return n + sumTo(n -1)
    }
}
console.log(sumTo(100))//5050


function sumTo(n){
    let result = 0;
    for (let i = 0; i <= n; i++){
        result += i
    }
    return result
}
console.log(sumTo(100))//5050

//faktorial
function fac(x){
    if (x === 1){
        return 1;
    } else {
        return x * fac(x - 1)
    }
}
console.log(fac(5))//120

function factorial(i) {
    return (i != 1) ? i * factorial(i - 1) : 1;
  }
  
  console.log(factorial(5))//120


  function fib(n){
    if (n <= 1){
      return n
    } else {
      return fib(n - 1) + fib(n - 2)
    }
  }
  console.log(fib(7))//13

 //fib(7) = fib(6) + fib(5)
// fib(6) = fib(5) + fib(4)
// fib(5) = fib(4) + fib(3)
// fib(4) = fib(3) + fib(2)
// fib(3) = fib(2) + fib(1)
// fib(2) = fib(1) + fib(0)
// Kemudian kita mulai menggabungkan hasilnya:

//fib(0) = 0
// fib(1) = 1
// fib(2) = fib(0) + fib(1) = 0 + 1 = 1
// fib(3) = fib(2) + fib(1) = 1 + 1 = 2
// fib(4) = fib(3) + fib(2) = 2 + 1 = 3
// fib(5) = fib(4) + fib(3) = 3 + 2 = 5
// fib(6) = fib(5) + fib(4) = 5 + 3 = 8


