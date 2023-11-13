/*
Pemrograman Berorientasi Objek (OOP) adalah paradigma pemrograman yang memungkinkan Anda untuk mengorganisasi 
kode menjadi objek-objek yang memiliki sifat dan perilaku tertentu. Dalam JavaScript, OOP dapat diimplementasikan 
menggunakan konsep "class" dan "prototype".

Class, Constructor, Method, dan Property

Class: Kelas adalah cetak biru atau blueprint untuk membuat objek. Ini adalah entitas yang mendefinisikan 
properti dan metode yang akan dimiliki oleh objek yang dibuat berdasarkan kelas ini.

Constructor: Konstruktor adalah metode khusus dalam sebuah kelas yang dipanggil saat objek dibuat dari kelas 
tersebut. Ini digunakan untuk menginisialisasi properti objek.

Method: Metode adalah fungsi yang terkait dengan kelas. Mereka mendefinisikan perilaku objek yang akan 
dibuat berdasarkan kelas tersebut.

Property: Properti adalah data yang dimiliki oleh objek. Ini mewakili atribut atau karakteristik dari objek.

Contoh Implementasi OOP dalam JavaScript:
Mari kita buat contoh sederhana: sebuah kelas Person untuk merepresentasikan orang dengan properti name dan age, 
serta metode greet untuk menyapa.
*/

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // Membuat objek dari kelas Person
  const person1 = new Person('Alice', 30);
  const person2 = new Person('Bob', 25);
  
  // Memanggil metode pada objek
  person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
  person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.


/*
Dalam contoh di atas:
-Person adalah kelas yang memiliki properti name dan age, serta metode greet.
-constructor di kelas Person digunakan untuk menginisialisasi properti name dan age saat objek dibuat.
-greet adalah metode yang mencetak pesan sapaan dengan menggunakan properti name dan age dari objek. 

Dalam skenario ini:
-name dan age adalah properti dalam kelas Person.
-constructor adalah metode yang disebut saat objek dibuat.
-greet adalah metode yang dapat dipanggil pada objek untuk menjalankan perilaku tertentu.

Ini adalah contoh sederhana tentang bagaimana OOP dapat diimplementasikan dalam JavaScript menggunakan kelas 
dan konsep konstruktor, metode, dan properti. Dalam proyek yang lebih besar, konsep ini akan membantu Kalian 
mengorganisir kode dengan lebih baik dan membuat struktur yang lebih terkelola.*/


/*berikut adalah penjelasan singkat tentang beberapa sifat utama Pemrograman Berorientasi Objek (OOP) beserta 
contoh kode untuk masing-masing:

1. Inheritance (Pewarisan)
Inheritance memungkinkan Kalian untuk membuat kelas baru berdasarkan kelas yang sudah ada. Kelas baru ini dapat 
mewarisi properti dan metode dari kelas yang sudah ada (kelas induk atau superclass).

contoh
*/
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  const dog = new Dog('Buddy');
  dog.speak(); // Output: Buddy barks.

/*Dalam contoh ini, kelas Dog mewarisi properti name dan metode speak dari kelas Animal.


2. Polymorphism (Polimorfisme)
Polimorfisme memungkinkan objek dengan tipe yang berbeda untuk merespons metode yang sama sesuai dengan tipe mereka 
sendiri. Ini memungkinkan fleksibilitas dalam pemanggilan metode.

Contoh:
*/
class Shape {
    area() {
      return 0;
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    area() {
      return Math.PI * this.radius ** 2;
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  }
  
  const circle = new Circle(5);
  const rectanglee = new Rectangle(4, 6);
  
  console.log(circle.area()); // Output: 78.53981633974483
  console.log(rectanglee.area()); // Output: 24

/*Dalam contoh ini, meskipun metode area digunakan untuk objek circle dan rectangle, hasilnya akan 
disesuaikan dengan jenis bentuk yang sesuai. 



3. Encapsulation (Enkapsulasi)
Enkapsulasi melibatkan penyembunyian detail internal dari objek dan hanya mengizinkan akses terbatas melalui 
antarmuka publik yang ditentukan. Ini membantu dalam memisahkan responsibilitas dan mencegah perubahan langsung 
pada properti objek.


Contoh:*/
class BankAccount {
    constructor(balance) {
      this._balance = balance;
    }
  
    get balance() {
      return this._balance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this._balance += amount;
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this._balance) {
        this._balance -= amount;
      }
    }
  }
  
  const account = new BankAccount(1000);
  console.log(account.balance); // Output: 1000
  
  account.deposit(500);
  console.log(account.balance); // Output: 1500
  
  account.withdraw(200);
  console.log(account.balance); // Output: 1300


/*Dalam contoh ini, properti _balance dienkapsulasi dan hanya dapat diakses melalui metode balance, deposit, 
dan withdraw.

Inilah beberapa sifat utama dalam Pemrograman Berorientasi Objek. Masing-masing sifat ini membantu Kalian membangun
kode yang lebih terorganisir, fleksibel, dan mudah diatur. */





/*LOGIC NOLEP (OOP.js)
tugas ini dibuat dengan 1 file oop.js, jangan lupa submit tugas ini dengan cara di ⁠WELCOME TO PHASE 1. 



Soal 1: Warisan (Inheritance) dan Metode
Deskripsi: Buatlah kelas Shape dengan properti sides yang menunjukkan jumlah sisi bentuk. Buatlah kelas turunan 
Triangle dan Rectangle yang mewarisi dari Shape. Implementasikan metode area di masing-masing kelas turunan.

Contoh Input/Output:
*/
// const triangle = new Triangle(3, 4);
// console.log(triangle.area()); // Output: 6

// const rectanglee = new Rectanglee(5, 6);
// console.log(rectanglee.area()); // Output: 30



/*Soal 2: Polimorfisme dan Antarmuka
Deskripsi: Buatlah kelas Vehicle dengan metode getInfo yang mengembalikan informasi umum tentang kendaraan. 
Buatlah kelas turunan Car dan Motorcycle yang mewarisi dari Vehicle dan mengimplementasikan metode getInfo yang 
spesifik.

Contoh Input/Output: */
// const car = new Car('Toyota', 'Corolla', 2020);
// console.log(car.getInfo()); // Output: Toyota Corolla 2020 Car

// const motorcycle = new Motorcycle('Honda', 'CBR', 2022);
// console.log(motorcycle.getInfo()); // Output: Honda CBR 2022 Motorcycle


/*Soal 3: Enkapsulasi dan Validasi
Deskripsi: Buatlah kelas Student dengan properti name, age, dan grade. Pastikan bahwa umur berada dalam rentang 6 
hingga 18 tahun, dan nilai berada dalam rentang 0 hingga 100. Implementasikan metode getInfo untuk mencetak 
informasi siswa.

Contoh Input/Output: */
// const student1 = new Student('Alice', 12, 85);
// console.log(student1.getInfo()); // Output: Name: Alice, Age: 12, Grade: 85

// const student2 = new Student('Bob', 20, 95);
// console.log(student2.getInfo()); // Output: Invalid Age or Grade


/*Catatan: Pastikan untuk memeriksa batasan umur dan nilai dalam konstruktor atau metode lainnya untuk 
menghindari data yang tidak valid. */






// /*Soal 1: Warisan (Inheritance) dan Metode
// Deskripsi: Buatlah kelas Shape dengan properti sides yang menunjukkan jumlah sisi bentuk. Buatlah kelas turunan 
// Triangle dan Rectangle yang mewarisi dari Shape. Implementasikan metode area di masing-masing kelas turunan.
//  */


class Shape {
  constructor(sides){
      this.sides = sides
  }
}

class Triangle extends Shape {
  constructor (a, b){
      super()
      this.a = a
      this.b = b
  }

  area(){
      return  this.a * this.b / 2
  }
}

class Rectangle extends Shape {
  constructor (c, d){
      super()
      this.c = c
      this.d = d
  }

  area (){
      return this.c * this.d
  }
}

const triangle = new Triangle(3, 4);
console.log(triangle.area()); // Output: 6

const rectangle = new Rectangle(5, 6);
console.log(rectangle.area()); // Output: 3





/*Soal 2: Polimorfisme dan Antarmuka
Deskripsi: Buatlah kelas Vehicle dengan metode getInfo yang mengembalikan informasi umum tentang kendaraan. 
Buatlah kelas turunan Car dan Motorcycle yang mewarisi dari Vehicle dan mengimplementasikan metode getInfo yang 
spesifik.

Contoh Input/Output: */

class Vehicle {
  constructor (merek, nama, tahun){
      this.merek = merek
      this.nama = nama
      this.tahun = tahun
  }
  getInfo(){
      return `${this.merek} ${this.nama} ${this.tahun}`
  }
}

class Car extends Vehicle {
  constructor(merek, nama, tahun){
      super(merek, nama, tahun)
      this.jenis1 = 'Car'
  }
  getInfo(){
      return `${this.merek} ${this.nama} ${this.tahun} ${this.jenis1}`
  }
}

class Motorcycle extends Vehicle {
  constructor(merek, nama, tahun){
      super(merek, nama, tahun)
      this.jenis2 = 'Motorcycle'
  }
  getInfo(){
      return `${this.merek} ${this.nama} ${this.tahun} ${this.jenis2}`
  }
}

const car = new Car('Toyota', 'Corolla', 2020);
console.log(car.getInfo()); // Output: Toyota Corolla 2020 Car

const motorcycle = new Motorcycle('Honda', 'CBR', 2022);
console.log(motorcycle.getInfo()); // Output: Honda CBR 2022 Motorcycle







/*Soal 3: Enkapsulasi dan Validasi
Deskripsi: Buatlah kelas Student dengan properti name, age, dan grade. Pastikan bahwa umur berada dalam rentang 6 
hingga 18 tahun, dan nilai berada dalam rentang 0 hingga 100. Implementasikan metode getInfo untuk mencetak 
informasi siswa.

Contoh Input/Output: */

class Student {
  constructor(name, age, grade){
      this._name = name
      this._age = ''
      this._grade = ''
      this.cek1(age)//untuk memvalidasi nilai age
      this.cek2(grade)//untuk memvalidasi nilai grade
  }

  cek1 (age){
      if (age >= 6 && age <= 18){
          this._age = age
      } else {
         this._age = undefined
      }
  }

  cek2 (grade){
      if (grade >= 0 && grade <= 100){
          this._grade = grade
      } else {
          this._grade = undefined
      }
  }

  getInfo(){
      if (this._age === undefined || this._grade === undefined){
          return `Invalid Age or Grade`
      } else {
          return `Name: ${this._name}, Age: ${this._age}, Grade: ${this._grade}`
      }
  } 
  
}


const student1 = new Student('Alice', 12, 85);
console.log(student1.getInfo()); // Output: Name: Alice, Age: 12, Grade: 85

const student2 = new Student('Bob', 20, 95);
console.log(student2.getInfo()); // Output: Invalid Age or Grade

/*Catatan: Pastikan untuk memeriksa batasan umur dan nilai dalam konstruktor atau metode lainnya untuk 
menghindari data yang tidak valid. */



