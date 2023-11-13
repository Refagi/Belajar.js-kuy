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



