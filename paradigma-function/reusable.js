// Reusable Function
/**Pada materi kali ini kita tidak berfokus untuk membuat banyak reusable function di JavaScript. Kami percaya, 
 * dengan memahami konsep functional programming secara matang, Anda dapat membuatnya sendiri sesuai kebutuhan.

Alih-alih membuatnya sendiri, kita akan coba membahas dan menggunakan beberapa reusable function yang sudah ada 
di JavaScript. Khususnya beberapa Higher-Order Function yang dimiliki array, seperti map, filter, dan forEach.



Array Map
Fungsi array.map() merupakan fungsi bawaan dari array yang sangat berguna dan banyak sekali digunakan. Fungsi ini 
dapat dipanggil dari sebuah data bertipe array dan menerima satu buah callback function. */
// biasanya developer menggunakannya untuk menghasilkan nilai baru.

const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { return `${name}!`});
console.log(newArray);
/**
 * [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 */

/**Array Filter
 * Bila Anda memiliki kasus di mana Anda ingin menghilangkan beberapa item di array berdasarkan spesifikasi 
 * tertentu, fungsi ini sangatlah cocok Anda gunakan.

Cara kerja fungsi ini mirip seperti array.map(). Namun, callback function dari fungsi ini harus mengembalikan 
boolean. Di mana nilai boolean ini digunakan untuk menentukan apakah item array lolos saring atau tidak.
Sama seperti fungsi map(), fungsi filter() juga akan mengembalikan array yang telah disaring dalam bentuk array baru.
 */
const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item));

console.log(truthyArray);
/**
 * output:
 * [ 1, 'Hallo', 'Harry', 14 ]
 * 
 */
const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);

console.log(eligibleForScholarshipStudents);
/**
 * output:
 * [ { name: 'James', score: 88 }, { name: 'Ron', score: 90 } ]
 * 
 */


/**Array Reduce
Sama seperti array.map(), array.reduce() adalah fungsi bawaan dari data yang bertipe array yang digunakan untuk 
mengeksekusi fungsi reducer pada setiap elemen array dan hanya mengembalikan output satu nilai saja.

arr.reduce(callback(accumulator, currentValue, [currentIndex], [array]), [initialValue])
 // [...] adalah opsional parameter

Callback function dari fungsi ini dapat diolah untuk manipulasi data currentValue dan menyimpannya pada accumulator. 
Selain itu, fungsi reduce juga memiliki nilai awal yang dapat didefinisikan pada bagian initialValue.

Contoh penggunaannya misalkan ketika kita ingin menjumlahkan total nilai siswa: */
const students = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
  ];
  
  const totalScore = students.reduce((acc, student) => acc + student.score, 0);
  
  console.log(totalScore);
  
  /**
   * output:
   * 313
   * 
   */

/**Array some
array.some() merupakan fungsi bawaan dari array yang cukup sering digunakan. Fungsi ini akan menghasilkan nilai boolean.

arr.some(callback(element, [index], [array]), [thisArg])
 // [...] adalah opsional parameter

Nilai yang dihasilkan didasarkan pada pernyataan apakah ada setidaknya satu dari deretan nilai dalam array 
tersebut lolos berdasarkan kriteria yang kita tuliskan dalam callback function. */

const array = [1, 2, 3, 4, 5];
const even = array.some(element => element % 2 === 0);

console.log(even);

/** 
output true
**/


/**Array find
Mirip dengan array.some(), array.find() sesuai namanya digunakan untuk mencari apakah di dalam deretan nilai 
terdapat nilai yang sesuai dengan kriteria yang kita definisikan pada callback function. 

Yang membedakan array.find() dengan array.some(), find akan menghasilkan satu nilai dari elemen yang pertama kali 
ditemukan berdasarkan kriteria tertentu dan akan menghasilkan nilai undefine bila tidak ada kriteria yang terpenuhi 
pada item array.

arr.find(callback(element, [index], [array]), [thisArg]);
// [...] adalah opsional parameter */

const studentsTwo = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
  ];
  
  const findJames = studentsTwo.find(studentsTwo => studentsTwo.name === 'James');
  console.log(findJames);
  
  /**
  output
  { name: 'James', score: 88 }
  **/



/**Array sort
array.sort() merupakan fungsi bawaan dari array yang berguna untuk melakukan pengurutan nilai dari sebuah deretan 
nilai. Secara default, fungsi sort akan mengubah semua nilai dalam deretan menjadi bentuk string dan mengurutkannya 
secara ascending.

arr.sort([compareFunction])
// [...] adalah opsional parameter */

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// output: [ 'Dec', 'Feb', 'Jan', 'March' ]

const array1 = [1, 30, 4, 1000, 101, 121];
array1.sort();
console.log(array1);
// output: [ 1, 1000, 101, 121, 30, 4 ]


const array2 = [1, 30, 4, 1000];

const compareNumber = (a, b) => {
  return a - b;
};
const sorting = array2.sort(compareNumber);
console.log(sorting);

/**
output
[ 1, 4, 30, 1000 ]
**/

/**Pada compare function, fungsi akan membandingkan 2 nilai yang akan menghasilkan 3 result yaitu negatif (-), 0, dan positif (+).

Jika, negative maka `a` akan diletakkan sebelum `b`
Jika, positive maka `b` akan diletakkan sebelum `a`
Jika, 0 maka tidak ada perubahan posisi.
*/

/**Array every
array.every() merupakan fungsi bawaan dari array yang digunakan untuk mengecheck apakah semua nilai dari sebuah 
array sesuai dengan kriteria yang didefinisikan. Kembalian dari array.every() adalah nilai Boolean.

arr.every(callback(element, [index], [array]) */
const scores = [70,85,90];
const minimumScore = 65;

const examPassed = scores.every(score => score >= minimumScore);
console.log(examPassed);
/**
output
true
**/


/**Array forEach
Array forEach merupakan fungsi bawaan dari array yang berfungsi untuk memanggil fungsi callback pada setiap iterasi 
index array. Berbeda dari fungsi array lain yang sudah kita bahas, fungsi ini tidak mengembalikan nilai apa pun. 
Jadi fungsi ini secara harfiah hanya berfungsi untuk memanggil fungsi callback-nya saja, tak lebih dari itu.

Melalui fungsi ini, Anda dapat mengubah sintaks perulangan berdasarkan jumlah array secara imperatif menjadi 
deklaratif. */

//cara imperatif
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
 
for(let i = 0; i < names.length; i++) {
  console.log(`Hello, ${names[i]}!`);
}

//cara deklaratif
names.forEach((name) => {
    console.log(`Hello, ${name}!`);
  });



/*Namun, ketahuilah bahwa ketika menggunakan forEach, kita tidak bisa menggunakan operator break atau continue 
pada proses perulangan (Anda bisa melakukannya pada perulangan for). Hal ini juga berlaku ketika pada fungsi map 
dan filter.*/

//   const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
   
  for(let i = 0; i < names.length; i++) {
    if(names[i] === 'Jeff') continue; // Bisa!
    
    console.log(`Hello, ${names[i]}!`);
  }
   
  names.forEach((name) => {
    if(name === 'Jeff') 
    // continue; // Tidak Bisa!
    console.log(`Hello, ${name}`);
  });



  /**
 * TODO:
 * Buatlah variabel greatAuthors yang merupakan array
 * berdasarkan hasil filter() dan map() dari books:
 *   - Gunakan fungsi filter untuk mengembalikan nilai item books
 *     yang hanya memiliki nilai sales lebih dari 1000000.
 *   - Gunakan fungsi map pada books yang sudah ter-filter,
 *     untuk mengembalikan nilai string dengan format:
 *     - `${author} adalah penulis buku ${title} yang sangat hebat!`
 *
 * Catatan: Jangan ubah nilai atau struktur dari books
 */

const books = [
    { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
    { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
    { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
    { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
    { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
    { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
    { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
  ];

const greatAuthors = books.filter((current) => current.sales > 1000000).map((result) => 
{return `${result.author} adalah penulis buku ${result.title} yang sangat hebat!`})
console.log(greatAuthors)


