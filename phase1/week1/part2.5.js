/*
constructor function sebelum EcmaScript 6
nama function biasa dibuat awal kata huruf besar
cara yang lebih mudah ada di part2.js
*/
function Count (){
    this.nama1 = ''
    this.nama2 = ''
    this.nama3 = ''
}

const reno = new Count()
reno.nama1 = 'reno'
reno.nama2 = 'faza'
reno.nama3 = 'givaro'
const faza = new Count()
faza.nama1 = 'brongz'
faza.nama2 = 'refagi'

console.log(reno)//Count { nama1: 'reno', nama2: 'faza', nama3: 'givaro' }
console.log(faza)//Count { nama1: 'brongz', nama2: 'refagi', nama3: '' }


//mathod di constructor function 
function Count(){
    this.nama1 = ''
    this.nama2 = ''
    this.namaLengkap = function (value){
        console.log(`my name is  ${this.nama1} ${this.nama2} panggil saja ${value}`)
        //my name is  reno faza panggil saja refagi
    }
}
const test = new Count()
test.nama1 = 'reno'
test.nama2 = 'faza'
test.namaLengkap('refagi')
console.log(test)
/*Count {
  nama1: 'reno',
  nama2: 'faza',
  namaLengkap: [Function (anonymous)]
} */

//begini cara lebih singkatnya 
function Count(nama1, nama2){
    this.nama1 = nama1
    this.nama2 = nama2
    this.namaLengkap = function (value){
        console.log(`my name is  ${this.nama1} ${this.nama2} panggil saja ${value}`)
        //my name is  reno faza panggil saja refagi
    }
}
const test = new Count('reno', 'faza')
test.namaLengkap('refagi')

console.log(test)
/*Count {
  nama1: 'reno',
  nama2: 'faza',
  namaLengkap: [Function (anonymous)]
} */


/*constructor inheritance 

dalam constructor inheritance kita bisa memanggil constructor lain, dengan begitu kita bisa mewarisi 
semua property yang dibuat di dalam contructor lain

untuk memanggilnya kita bisa menmanggil, kita bisa menggunakan NamaConstructor.call (this, parameter)*/

function CobaOne (firstNama){
    this.firstNama = firstNama
    this.namaLengkap = function (value){
        console.log(`my name is ${this.firstNama}, hello ${value}`)
        //my name is reno, hello refagi
    }
}

function CobaTwo (firstNama, lastName){
    this.lastName = lastName
    CobaOne.call(this, firstNama)
}

const test = new CobaTwo('reno', 'faza')
test.namaLengkap('refagi')
console.info(test)
/*
CobaTwo {
  lastName: 'faza',
  firstNama: 'reno',
  namaLengkap: [Function (anonymous)]
}
 */



/*
Class

class Arr {

}

const test = new Arr()
console.log(test)


Constructor Class

class Arr {
    constructor(a, b){
        this.a = a
        this.b = b
    }
}

const test = new Arr('woi', 'kiw')
console.log(test)



Method Class

class Arr {
    constructor(a, b){
        this.a = a
        this.b = b
    }

    call(){
        return `${this.a} ${this.b}`
    }
}

const test = new Arr('woi', 'kiw')
console.log(test)

 */


/*
Super Method
*/


/*kalau ingin memanggil method di class parent gunakan Super.<nama method di class parent> 
 */
class Test {
    person(){
        console.log('Kiw kiw cukurukuk')
    }
}

class Biber extends Test {
    bumb(){
        super.person()
        console.log('kuk gruu')
    }
}

const cek = new Biber()
cek.bumb()
/*Kiw kiw cukurukuk
kuk gruu */


//Public field Class, dapat di ubah di luar class
class Ultimate {
    constructor(one, two){
        this.one = one
        this.two = two
    }

    result(){
        return `${this.one} ${this.two}`
    }
}

const test = new Ultimate(1, 2)
test.one = 5 // 1 bisa di ubah dengan cara ini kalau di public Class
console.log(test.result())


//Private Field Class, hanya bisa di akses di dalam class saja atau hanya bisa deklarasi di dalam class
class Wumber {

    //harus inialisasi ini dulu 
    #ken 
    #kon

    constructor(ken, kon){
        this.#ken = ken
        this.#kon = kon
    }

    kiwiw(ken){
        this.#ken = ken
    }

    cukurukuk(kon){
        this.#kon = kon
    }


    cek(){
        return `${this.#ken} ${this.#kon}`
    }
}
const bek = new Wumber(100, 70)
cek.cukurukuk = 8// kalau menambahkan ini bakal error
console.log(bek.cek())


//syntax sebelum ES6
function Car(brand, color, maxSpeed, chassisNumber) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
  }
   
  Car.prototype.drive = function() {
    console.log(`${this.brand} ${this.color} is driving`);
  }
   
  Car.prototype.reverse = function() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }
   
  Car.prototype.turn = function() {
    console.log(`${this.brand} ${this.color} is turning`);
  }
   
  // Membuat objek mobil dengan constructor function Car
  const car1 = new Car('Toyota', 'Silver', 200, 'to-1');
  const car2 = new Car('Honda', 'Black', 180, 'ho-1');
  const car3 = new Car('Suzuki', 'Red', 220, 'su-1');
   
  console.log(car1);
  console.log(car2);
  console.log(car3);
   
  car1.drive();
  car2.drive();
  car3.drive();
   
  /* Output
  Car { brand: 'Toyota', color: 'Silver', maxSpeed: 200, chassisNumber: 'to-1' }
  Car { brand: 'Honda', color: 'Black', maxSpeed: 180, chassisNumber: 'ho-1' }
  Car { brand: 'Suzuki', color: 'Red', maxSpeed: 220, chassisNumber: 'su-1' }
   
  Toyota Silver is driving
  Honda Black is driving
  Suzuki Red is driving
  */
 /*
  - Penamaan fungsi yang merupakan constructor function, secara konvensi harus ditulis dengan huruf kapital. 
  Itulah alasan kami memberi nama fungsi tersebut Car, bukan car. Hal ini penting untuk Anda ikuti guna membedakan 
  fungsi biasa dengan constructor function karena penggunaannya berbeda.

  - Constructor function dapat memanfaatkan keywordthis yang bernilai objek (instance) dirinya sendiri. Keywordthis 
  dapat dimanfaatkan untuk mengakses nilai properti atau method dari objek tersebut. Contoh, kami menggunakan 
  keyword this untuk menetapkan nilai properti brand dari argumen fungsi. Selain itu, di dalam method drive, 
  kami juga menggunakan this untuk mendapatkan nilai properti brand dan color.

  - Constructor function memiliki internal property bernama prototype. Properti ini digunakan untuk mendefinisikan 
  method-method yang akan dimiliki oleh objek yang dibuat. Alasan method perlu didefinisikan di dalam prototype agar 
  mudah untuk diwarisi ketika melakukan pewarisan.

  - Terakhir, agar fungsi mengembalikan sebuah objek, Anda harus memanggilnya dengan menambahkan keyword new.
   Contoh, pada kode di atas, perhatikan cara kami memanggil fungsi Car untuk membuat objek car1, car2, dan car3.
   
  Perlu Anda ingat bahwa constructor function hanya dapat dibuat dengan reguler function. Anda tidak dapat membuat 
  constructor function dengan arrow function. Arrow function tidak dapat dipanggil dengan keyword new.*/
  
//   const Car = (brand) => this.brand = brand;
   
//   const car1 = new Car('Toyota');
   
  /* Output
  TypeError: Car is not a constructor
  */

  /*Object Composition
  Fitur pewarisan pada class begitu legit dalam memangkas duplikasi kode. Kita tidak perlu repetitif menulis kode 
  yang sama ketika dua class atau lebih memiliki kemampuan yang sama. Namun, apakah pewarisan di JavaScript mampu 
  memecahkan masalah yang lebih kompleks? Mari kita cari tahu.
  
  Di dunia nyata, ada banyak peran dari seorang Developer, tetapi ada empat peran yang mungkin Anda sudah familier 
  seperti Front-End Developer, Back-End Developer, DevOps, dan Full-Stack Developer. Semuanya masuk ke dalam 
  kategori Developer dan mereka mampu menulis dan mengubah kode (commit changes). Selain itu, terdapat juga 
  kemampuan yang spesifik terhadap perannya masing-masing, Front-End Developer dapat membangun antarmuka (build UI), 
  Back-End Developer dapat membangun API (build API), dan DevOps mampu men-deploy aplikasi. 
  Peran Full-Stack Developer adalah satu-satunya peran yang mampu melakukan banyak hal, di samping menulis dan 
  mengubah kode, dia mampu membagun antarmuka, membangun API, dan men-deploy aplikasi.
  
  Jika kita gambarkan skenario di atas dalam konsep OOP, Developer merupakan sebuah superclass; 
  sedangkan Front-End Developer, Back-End Developer, dan DevOps adalah subclass. Struktur dari pewarisan class 
  akan tampak seperti kode di bawah ini.*/
  
  class Developer {
    constructor(name) {
      this.name = name;
    }
   
    commitChanges() {
      console.log(`${this.name} is committing changes...`);
    }
  }
   
  class FrontEndDeveloper extends Developer {
    buildUI() {
      console.log(`${this.name} is building UI...`);
    }
  }
   
  class BackEndDeveloper extends Developer {
    buildAPI() {
      console.log(`${this.name} is building API...`);
    }
  }
   
  class DevOps extends Developer {
    deployApp() {
      console.log(`${this.name} is deploying app...`);
    }
  }
//   Seluruh class sudah terdefinisikan dengan baik, tetapi kurang Full-Stack Developer. 
//   Apakah Anda punya ide cara mendefinisikan class FullStackDeveloper yang efektif tanpa ada kode repetitif menggunakan pewarisan?
  
  class FullStackDeveloper extends Developer {
   // ???
  }
//   Jika menggunakan pewarisan tentu tidak ada cara selain kita menulis kembali method buildUI(), buildAPI(), dan deployApp() di dalam FullStackDeveloper. 
  
  class FullStackDeveloper extends Developer {
   buildUI() {
     console.log(`${this.name} is building UI...`);
   }
   
   buildAPI() {
     console.log(`${this.name} is building API...`);
   }
   
   deployApp() {
     console.log(`${this.name} is deploying app...`);
   }
  }

  /**
   * Cara ini sungguh tidak efektif karena jika terjadi perubahan pada salah satu fungsi, kita perlu mengubahnya di dua tempat.
Lalu apa solusinya?

Solusinya adalah meninggalkan pewarisan dan gunakan teknik object composition.
*/

class Developer {
    constructor(name) {
      this.name = name;
    }
   
    commitChanges() {
      console.log(`${this.name} is committing changes...`);
    }
  }
   
  function canBuildUI(developer) {
    return {
      buildUI: () => {
        console.log(`${developer.name} is building UI...`);
      }
    }
  }
   
  function canBuildAPI(developer) {
    return {
      buildAPI: () => {
        console.log(`${developer.name} is building API...`);
      }
    }
  }
   
  function canDeployApp(developer) {
    return {
      deployApp: () => {
        console.log(`${developer.name} is deploying app...`);
      }
    }
  }
   
  function createFrontEndDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer));
  }
   
  function createBackEndDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildAPI(developer));
  }
   
  function createDevOps(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canDeployApp(developer));
  }
   
  function createFullStackDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer), canBuildAPI(developer), canDeployApp(developer));
  }
   
  const frontEndDeveloper = createFrontEndDeveloper('Fulan');
  frontEndDeveloper.commitChanges();
  frontEndDeveloper.buildUI();
  console.log(`is ${frontEndDeveloper.name} developer? `, frontEndDeveloper instanceof Developer);
   
  const backEndDeveloper = createBackEndDeveloper('Fulana');
  backEndDeveloper.commitChanges();
  backEndDeveloper.buildAPI();
  console.log(`is ${backEndDeveloper.name} developer? `, backEndDeveloper instanceof Developer);
   
  const devOpsDeveloper = createDevOps('Fulani');
  devOpsDeveloper.commitChanges();
  devOpsDeveloper.deployApp();
  console.log(`is ${devOpsDeveloper.name} developer? `, devOpsDeveloper instanceof Developer);
   
  const fullStackDeveloper = createFullStackDeveloper('Fulanah');
  fullStackDeveloper.buildUI();
  fullStackDeveloper.buildAPI();
  fullStackDeveloper.deployApp();
  console.log(`is ${fullStackDeveloper.name} developer? `, fullStackDeveloper instanceof Developer);
   
  /**
  * Output:
  * Fulan is committing changes...
  * Fulan is building UI...
  * is Fulan developer?  true
  * Fulana is committing changes...
  * Fulana is building API...
  * is Fulana developer?  true
  * Fulani is committing changes...
  * Fulani is deploying app...
  * is Fulani developer?  true
  * Fulanah is building UI...
  * Fulanah is building API...
  * Fulanah is deploying app...
  * is Fulanah developer?  true
  */
