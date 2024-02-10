 /* Properti Getter dan Setter
  Secara standar, properti di dalam sebuah instance class bersifat mutable atau dapat diubah nilainya. 
  Meskipun kita sudah menetapkan nilai chassisNumber oleh sistem, nyatanya nilai tersebut dapat diubah dengan 
  mudah ketika objek mobil telah dibuat.*/
  
  class Car {
    constructor(brand, color, maxSpeed) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
    }
  }
  const car = new Car('BMW', 'red', 200);
  car.chassisNumber = 'BMW-1';
   
  console.log(car);
  /* Output:
  Car { brand: 'BMW', color: 'red', maxSpeed: 200, chassisNumber: 'BMW-1' }
  */
 
  /*
  Lalu, bagaimana cara memproteksi agar nilai dari properti chassisNumber tidak dapat diubah? Nah, 
  ketika kita berhadapan dengan kasus seperti ini, kita bisa memanfaatkan properti getter dan setter.
  
  Sebelum memecahkan masalah di atas, ketahuilah bahwa ada dua tipe properti, yaitu data property dan accessor 
  property.
  
  Data property merupakan properti yang sejauh ini kita lihat, properti yang langsung menampung sebuah nilai 
  di dalam sebuah objek.
  
  Sedangkan accessor property merupakan properti yang dikontrol oleh sebuah getter dan setter. 
  Nilai yang didapatkan dari properti tersebut dikontrol oleh method get dan cara menetapkan nilai tersebut 
  dikontrol oleh method set.*/

  class User {
    constructor(firstName, lastName) {
     this.firstName = firstName;
     this.lastName = lastName;
   }
   
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
   
    set fullName(fullName) {
      const [firstName, lastName] = fullName.split(' ');
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
   
  const user = new User('John', 'Doe');
  console.log(user);
  console.log(user.fullName);
   
  user.fullName = 'Fulan Fulanah';
  console.log(user);
  console.log(user.fullName);
   
  /* Output:
  User { firstName: 'John', lastName: 'Doe' }
  John Doe
  User { firstName: 'Fulan', lastName: 'Fulanah' }
  Fulan Fulanah
  */



/**Catatan penting yang perlu Anda ketahui mengenai getter setter adalah:

1.method getter harus mengembalikan sebuah nilai dan nilai tersebut akan menjadi nilai properti;
2.method setter harus menerima satu argumen yang nilainya diambil dari operand ke dua ketika melakukan assignment operator.

Mari kita kembali ke masalah perubahan nilai properti chassisNumber. Bagaimana getter dan setter dapat memproteksi 
perubahan properti chassisNumber? Di JavaScript, pola yang sering diterapkan untuk memecahkan masalah ini adalah 
dengan memanfaatkan getter setter sebagai “wrapper” dari properti aslinya. Tujuannya agar getter setter bisa 
mengontrol akses seperti mendapatkan dan menetapkan nilai properti.

Untuk menerapkan pola ini, pertama kita perlu mengubah nama dari properti chassisNumber, misalnya dengan 
menambahkan tanda garis bawah di depannya menjadi _chassisNumber.*/

class Car {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
  }
}
// Lalu, kita tetapkan getter dan setter untuk properti chassisNumber. Untuk getter, kita kembalikan dengan nilai properti _chassisNumber.

class Car {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
 }
 
  get chassisNumber() {
    return this._chassisNumber;
  }
}
// Kita tidak ingin nilai chassisNumber dapat diubah sehingga untuk setter properti chassisNumber, cetak saja teks peringatan menggunakan console.log() seperti ini.

class Car {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
  }
 
  get chassisNumber() {
    return this._chassisNumber;
  }
 
  set chassisNumber(chassisNumber) {
    console.log('you are not allowed to change the chassis number');
  }
}
// Lantas, ketika kita membuat instance Car, nilai chassisNumber tidak dapat diubah.

class Car {
    constructor(brand, color, maxSpeed) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
    }
   
    get chassisNumber() {
      return this._chassisNumber;
    }
   
    set chassisNumber(chassisNumber) {
      console.log('you are not allowed to change the chassis number');
    }
  }
   
  const car = new Car('BMW', 'red', 200);
  console.log(car.chassisNumber);
  car.chassisNumber = 'BMW-1';
  console.log(car.chassisNumber);
   
  /* Output:
  BMW-232
  you are not allowed to change the chassis number
  BMW-232
  */
 /**
  Catatan

Sebenarnya nilai chassisNumber masih bisa berubah jika kita mengubah langsung melalui properti _chassisNumber. 
Namun, ketahuilah bahwa mengubah atau mendapatkan nilai properti objek yang diawali dengan tanda underscore tidak 
direkomendasikan. Alasanya, komunitas JavaScript menyepakati bahwa hal properti yang diberi tanda underscore 
bukan untuk diakses, alias bersifat privat.

JavaScript versi ES2022 hadir dengan fitur private identifier. Dengan fitur tersebut, kita bisa membuat private 
property. Ini akan memecahkan masalah di atas. Private property akan kami bahas pada materi Member Visibility.
  */

/*
Contoh, pada class Car, kita menetapkan nilai _chassisNumber dengan nilai random yang ditulis di dalam constructor. 
Hal itu membuat kode di dalam constructor menjadi sulit dibaca karena dicampuri dengan logika dalam menghasilkan 
angka acak.

Agar kode di dalam constructor lebih rapi, kita bisa membuat method yang digunakan internal yang menampung kode 
random tersebut. Biasanya method yang hanya digunakan secara internal disebut dengan private dan namanya diawali 
dengan tanda underscore. */

class Car {
    constructor(brand, color, maxSpeed) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      this._chassisNumber = this._generateChassisNumber();
    }
   
    get chassisNumber() {
      return this._chassisNumber;
    }
   
    set chassisNumber(chassisNumber) {
      console.log('you are not allowed to change the chassis number');
    }
   
    // Methods
    drive() {
      console.log(`${this.brand} ${this.color} is driving`);
    }
   
    reverse() {
      console.log(`${this.brand} ${this.color} is reversing`);
    }
   
    turn(direction) {
      console.log(`${this.brand} ${this.color} is turning ${direction}`);
    }
   
    _generateChassisNumber() {
      return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
    }
  }



  //pewarisan inheritances
// Superclass
class MailService {
  constructor(sender) {
    this.sender = sender;
  }
 
  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
}
 
// Subclass
class WhatsAppService extends MailService {
 
}
 
// Subclass
class EmailService extends MailService {
 
}
// Di dalam masing-masing subclass, kita bisa mendefinisikan method yang spesifik, seperti sendBroadcastMessage() 
// untuk WhatsAppService dan sendDelayedMessage() untuk EmailService.

// Subclass
class WhatsAppService extends MailService {
  sendBroadcastMessage(message, receivers) {
    for (const receiver of receivers) {
      this.sendMessage(message, receiver);
    }
  }
}
 
// Subclass
class EmailService extends MailService {
  sendDelayedMessage(message, receiver, delay) {
    setTimeout(() => {
      this.sendMessage(message, receiver);
    }, delay);
  }
}
/*Lihatlah bahwa di dalam subclass WhatsAppService dan EmailService kita tetap memiliki akses terhadap method dari 
superclass melalui keyword this karena subclass mewarisi sifat dari superclass.

Dengan teknik pewarisan seperti ini, akhirnya kita bisa membuat dua objek serupa dengan cara yang jauh lebih efektif.*/

const whatsapp = new WhatsAppService('+6281234567890');
const email = new EmailService('dimas@dicoding.com');
 
whatsapp.sendMessage('Hello', '+6289876543210');
whatsapp.sendBroadcastMessage('Hello', ['+6289876543210', '+6282234567890']);
whatsapp.sendDelayedMessage(); // Error
 
email.sendMessage('Hello', 'john@doe.com');
email.sendDelayedMessage('Hello', 'john@doe.com', 3000);
email.sendBroadcastMessage(); // Error



//Pewarisan tanpa ES6 Class
function MailService(sender) {
    this.sender = sender;
  }
   
  MailService.prototype.sendMessage = function (message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
   
  function WhatsAppService(sender) {
    MailService.call(this, sender);
  }
   
  // Prototype inheritance
  WhatsAppService.prototype = Object.create(MailService.prototype);
  WhatsAppService.prototype.constructor = WhatsAppService;
   
  WhatsAppService.prototype.sendBroadcastMessage = function (message, receivers) {
    for (const receiver of receivers) {
      this.sendMessage(message, receiver);
    }
  }
   
  function EmailService(sender) {
    MailService.call(this, sender);
  }
   
  // Prototype inheritance
  EmailService.prototype = Object.create(MailService.prototype);
  EmailService.prototype.constructor = EmailService;
   
  EmailService.prototype.sendDelayedMessage = function (message, receiver, delay) {
    setTimeout(() => {
      this.sendMessage(message, receiver);
    }, delay);
  }
   
//   const whatsapp = new WhatsAppService('+6281234567890');
//   const email = new EmailService('dimas@dicoding.com');
  whatsapp.sendMessage('Hello', '+6289876543210');
  whatsapp.sendBroadcastMessage('Hello', ['+6289876543210', '+6282234567890']);
  email.sendMessage('Hello', 'john@doe.com');
  email.sendDelayedMessage('Hello', 'john@doe.com', 3000);
/**
 * Pewarisan dengan menggunakan keyword function memang lebih sulit untuk dibaca, alasan inilah yang membuat 
 * sintaks class hadir pada ES6. Namun, meskipun sintaks class terkesan sangat jauh berbeda dari function, 
 * sebenarnya implementasi keduanya sama-sama menggunakan prototype inheritance. Ingat! Class hanyalah cara lain 
 * dalam membuat constructor function.
 */

/*Operator instanceof
Ketika menulis kode, kita seringkali perlu mengecek jenis dari objek tersebut. Salah satu cara mengetahui jenis 
objek adalah dengan mengecek rantai prototype-nya. Nah, untuk mengetes sebuah objek berdasarkan prototype dari 
constructor function atau class tertentu, kita bisa menggunakan operator instanceof.

operand1 instanceof operand2
Penjelasannya:

operand1: merupakan objek yang ingin dites prototype-nya.
operand2: merupakan constructor function atau class.
Berikut contoh penggunaan dari operator instanceof dalam mengecek objek whatsapp yang merupakan instance dari 
class WhatsAppService.*/

// const whatsapp = new WhatsAppService('+6281234567890');
 
console.log(whatsapp instanceof WhatsAppService); // true
console.log(whatsapp instanceof EmailService); // false





/**
 * Overriding
Konsep lain yang lekat dengan pewarisan adalah overriding. Overriding di dalam OOP merupakan fitur yang 
memperbolehkan subclass mendefinisikan implementasinya sendiri pada sebuah method yang sebenarnya sudah 
didefinisikan pada superclass-nya. Overriding diterapkan ketika kita ingin menetapkan implementasi yang spesifik 
di subclass pada sebuah method yang berasal dari superclass. Overriding juga biasa diterapkan ketika kita ingin 
menambah properti baru secara spesifik pada sebuah subclass.

Di JavaScript dan bahasa pemrograman yang menerapkan paradigma OOP lainnya, overriding umumnya dapat dilakukan 
pada constructor dan method class.
 */
class MailService {
    constructor(sender) {
      this.sender = sender;
    }
   
    sendMessage(message, receiver) {
      console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
  
  }
  
  class WhatsAppService extends MailService {
    constructor(sender, isBusiness) {
      super(sender);
      this.isBusiness = isBusiness;
    }
    
   
    // Overriding method
    sendMessage(message, receiver) {
      // memanggil method sendMessage pada superclass
      super.sendMessage(message, receiver);
  
      console.log('message sent via WhatsApp');
    }
  }
  
  
  const mailService = new MailService('someSender');
  const whatsappService = new WhatsAppService('+6281234567890', true);
  
  mailService.sendMessage('Hai, apa kabar?', 'someReceiver');
  whatsappService.sendMessage('Hai, apa kabar?', '+6289876543210');
  
  /**
  * Output:
  * someSender sent Hai, apa kabar? to someReceiver
  * +6281234567890 sent Hai, apa kabar? to +6289876543210
  * message sent via WhatsApp
  */



  //kuis dicoding oop
  /**
 * TODO:
 * 1. Buatlah class bernama Animal dengan ketentuan:
 *    - Memiliki properti:
 *      - name: string
 *      - age: int
 *      - isMammal: boolean
 *    - Memiliki constructor untuk menginisialisasi properti:
 *      - name
 *      - age
 *      - isMammal
 * 2. Buatlah class bernama Rabbit dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - eat yang mengembalikan nilai string `${this.name} sedang makan!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai true
 * 3. Buatlah class bernama Eagle dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - fly yang mengembalikan nilai string `${this.name} sedang terbang!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai false
 * 4. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
 *    - properti name bernilai: "Labi"
 *    - properti age bernilai: 2
 * 5. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
 *    - properti name bernilai: "Elo"
 *    - properti age bernilai: 4
 */

// Tulis kode di bawah ini
class Animal {
    constructor(name, age, isMammal){
        this.name = name
        this.age = age
        this.isMammal = isMammal
    }
}

class Rabbit extends Animal {
    constructor(name, age, isMammal){
        super(name, age, isMammal)
        this.isMammal = true
    }

    eat() {
        return `${this.name} sedang makan!`
    }
}

class Eagle extends Animal {
    constructor(name, age, isMammal){
        super(name, age, isMammal)
        this.isMammal = false
    }

    fly() {
        return `${this.name} sedang terbang!`
    }
}

const myRabbit = new Rabbit('Labi', 2)

const myEagle = new Eagle('Elo', 4)

console.log(myRabbit)
console.log(myEagle)