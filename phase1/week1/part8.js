/*
Huffman Coding Algorithm

sebelum belajar Huffman Algorithm , pahami dulu struktur data Heap

Heap adalah sebuah struktur data berbasis binary tree yang dimana memenuhi persyaratan sebagai binary tree yang 
lengkap atau biasa disebut complete binary tree.
Complete binary tree adalah sebuah binary tree yang setiap levelnya ( kecuali level paling akhir ) 
terisi semuanya dan semua simpul atau node paling akhir terisi dari kiri secara penuh.

1.merupakan complete binary tree,  2.bukan merupakan complete binary tree,    3.bukan merupakan complete binary               
                1                                  1                              1
               / \                                / \                            / \
             /    \                             /    \                         /    \
            2       3                          2      3                       2      3
          /   \                               /        \                     / \
        /      \                             /          \                   /   \
       4        5                           4            5                 4     5                          
                                                                          /             
                                                                         /
                                                                        6                      
                                                                        
1.Gambar Tree 1 merupakan Complete Binary Tree karena tree tersebut sudah memenuhi persyaratan atau karakteristik 
dari sebuah Complete Binary Tree, dimana setiap levelnya harus semuanya terisi dan semua simpil atau node terisi
dari kiri secara penuh.

2.Gambar Tree 2 bukan termasuk ke dalam Complete Binary Tree karena tidak memenuhi semua persyaratan dari sebuah 
Complete Binary Tree, dimana pada gambar tree kedua tersebut semua simpul atau node paling akhir tidak terisi 
dari kiri secara penuh ( node sebelah kiri pada level akhir belum terisi semua, tetapi langsung loncat ke node 
sebelah kanannya, bisa dilihat pada node nomor 5).

3.Gambar Tree 3 bukan termasuk ke dalam Complete Binary Tree karena tidak memenuhi semua persyaratan dari sebuah 
Complete Binary Tree, dimana pada gambar tree ketiga tersebut tidak semua level terisi secara penuh. 
Kita bisa lihat pada level 2, dimana pada level tersebut tidak terisi semuanya tetapi langsung lompat ke 
level selanjutnya, yaitu ke level 3.                                                                      
                                                                        
                                                                        
Jenis — jenis Heap
Heap dibedakan menjadi dua jenis, yaitu 
Maximum Heap dan Minimum Heap.                                                                      

- Maximum Heap
Maximum Heap atau Max Heap adalah sebuah heap dimana nilai pada node induk atau parent lebih besar atau sama 
dengan nilai pada node anak-anaknya
                              
                                        125
                                    /        \
                                   /          \
                                  75           83
                                /   \         /  \
                              /      \       /    \
                             60       44    23     68


- Minimum Heap
Minimum Heap atau Min Heap adalah kebalikan dari Maximum Heap. Jika pada Maximum Heap, nilai pada node induk 
lebih besar atau sama dengan node anak-anaknya, pada Minimum Heap, nilai pada node induk lebih kecil atau sama 
dengan node anak-anaknya.
                                                                        
                                         23
                                      /      \
                                     /        \
                                    60         44
                                   /  \        / \
                                 /     \      /   \
                               68      83    75    125

    Maximum Heap                                             Minimum Heap
    index  0   1  2  3  4  5  6                              index  0   1   2   3   4   5   6
    nilai 125 75 83 60 44 23 68                              nilai 23  60  44  68  83  75  125



Sebelum kita mengimplementasikannya ke dalam bentuk kode, ada beberapa ketentuan yang harus kita ketahui.

1.Maksimum jumlah node atau simpul sampai level ke-n dapat dihitung dengan rumus: 2ⁿ⁺¹-1. Jika kita ambil contoh 
pada gambar diatas misalnya, dimana jumlah levelnya adalah 2 ( level 1 dimulai dari indeks 1 dan 2 bukan dari 
indeks 0 atau root ) maka kita bisa hitung jumlah node atau simpul yang ada dengan ²²⁺¹-1 = 8–1 = 7.

2.Maksimum elemen pada level n dapat dihitung dengan rumus: 2ⁿ. Kita ambil contoh kembali, misalnya kita akan 
menghitung jumlah maksimum elemen yang ada pada level 2, maka kita bisa hitung jumlah maksimum node atau simpul 
yang ada dengan ²² = 4. Jadi, kita bisa ketahui bahwa jumlah maksimum node atau simpul yang ada pada 
level 2 adalah 4 buah node.

3.Indeks parent dari sebuah node atau simpul dapat dihitung dengan rumus: i-1 div 2, dengan i adalah indeks 
dari node ingin kita cari indeks parentnya. Perlu diketahui bahwa kita menggunakan array Javascript yang dimana
indeksnya dimulai dari indeks ke-0, jika mungkin di luar dari tulisan ini kalian menemukan rumus yang berbeda
misalnya i div 2 maka tak usah heran, itu karena mungkin arraynya dimulai dari indeks ke-1 seperti yang dipakai 
pada bahasa Pascal. Agar lebih jelas kita bisa ambil contoh dari gambar Maximum Heap di atas, misal kita ingin 
mencari indeks parent dari node dengan indeks ke-4 yang nilainya 44, kita bisa langsung menghitungnya 
dengan 4–1 div 2 = 1. Maka, parent dari node indeks ke-4 adalah node pada indeks ke-1 dengan nilai 75.

4.Indeks dari anak kiri dari sebuah parent dapat dihitung dengan rumus: 2 * i + 1, dengan i adalah indeks dari 
node parent. Sama seperti poin nomor 3, jika mungkin kalian menemukan rumus yang berbeda seperti 2 * i maka 
arraynya dimulai dari indeks ke-1. Agar lebih jelas kita akan mempraktekkannya. Kita ambil contoh dari gambar 
Maximum Heap di atas, misal kita ingin mencari anak kiri atau left child dari parent indeks ke-2 yang nilainya 83, 
kita bisa langsung menghitungnya dengan 2 * 2 + 1 = 5. Kita bisa lihat bahwa anak kiri dari 
node parent indeks ke-4 (83) terletak pada indeks ke-5 dengan nilai 23.

5.Indeks dari anakan kanan dari sebuah parent dapat dihitung dengan rumus: 2 * i + 2, dengan i adalah indeks dari 
node parent. Sama seperti poin nomor 4, jika mungkin kalian menemukan rumus yang berbeda seperti 2 * i + 1 maka 
arraynya dimulai dari indeks ke-1. Untuk lebih jelas, kita akan mencobanya, misal pada gambar Maximum Heap 
di atas kita ingin mencari anak kanan atau right child dari node parent indeks ke-0 (125), 
maka kita bisa langsung menghitungnya dengan 2 * 0 + 2 = 2. Kita bisa lihat bahwa anak kanan dari node parent 
indeks ke-0 terletak pada indeks ke-2 dengan nilai 83.
*/                         

class MinHeap {
  
    // Inisialisasi array heap
    constructor() {
        this.list = [];
    }
}

/*Heap memiliki beberapa operasi pada implementasiannya, seperti

Shift Up
1.Pada Maximum Heap, Shift Up adalah proses dimana ketika node bertambah sehingga nilainya lebih besar daripada 
parentnya. Proses ini biasanya dilakukan ketika terjadi penambahan data, pengurutan data atau perubahan data. 
Operasi Shift Up biasanya dipakai pada node paling akhir.
2.Pada Minimum Heap, Shift Up adalah proses dimana ketika node bertambah sehingga nilainya lebih kecil daripada 
parentnya. Proses ini biasanya dilakukan ketika terjadi penambahan data atau perubahan data.
Algoritma untuk operasi Shift Down sendiri adalah,

Tukarkan nilai node atau simpul atau indeks dengan nilai dari node atau simpul parentnya.
Lakukan langkah pertama sampai ditemukan posisi yang sudah memenuhi kondisi heap.
     Heap awal            shift Up pertama                        shift Up kedua
        7                          7                                    6
      /  \                       /  \                                 /  \         
     8    9     ==>             6    9         ==>                   7    9
   /  \                       /  \                                 /  \
 10    6                     10   8                               10   8


Setelah itu kita bisa mengimplementasikannya dalam bentuk kode, menjadi seperti ini.
*/

shiftUp(); {
    let index = this.list.length - 1;

    while(index > 0) {
      const parentIndex = Math.floor((index-1)/ 2);

      if(this.list[parentIndex] >= this.list[index]) {
        [this.list[index], this.list[parentIndex]] = [this.list[parentIndex], this.list[index]];

          // Same like code below

          // let temp = this.list[index];
          // this.list[index] = this.list[parentIndex];
          // this.list[parentIndex] = temp;

          index = parentIndex;
      } else {
          break;
      }
    }
}
/*Pada kode diatas kita menambahkan sebuah fungsi atau method dengan nama shiftUp ke dalam class MinHeap yang 
sebelumnya sudah kita buat. Kode diatas mengimplementasikan algoritma yang sudah dijelaskan sebelumnya. 





Shift Down

1.Pada Maximum Heap, Shift Down adalah proses dimana ketika sebuah node berkurang sehingga nilainya lebih kecil 
dari anak-anaknya. Operasi Shift Down biasanya dilakukan pada sebuah node parent.
2.Pada Minimum Heap, Shift Down adalah proses dimana ketika sebuah node berkurang sehingga nilainya lebih besar 
dari anak-anaknya.
Algoritma untuk operasi Shift Down pada Minimun Heap sendiri adalah,

Tukarkan nilai node atau simpul yang di shiftDown atau yang berubah dengan node atau simpul anak yang memiliki 
nilai lebih kecil atau yang terkecil.
Lakukan langkah pertama sampai memenuhi pada kondisi heap.
        Heap awal                   Shift Down pertama                  Shift Down kedua
              12                           7                                    7
            /   \                        /  \                                 /   \
           7     9   ==>                12   9       ==>                     8     9
         /   \                         /  \                                /   \
       10    8                        10   8                              10    12


Setelah kita mengetahui algoritma dan proses shift down sendiri, kita bisa mengimplementasikkannya menjadi 
kode seperti ini.
*/

shiftDown(index); {
    const leftChild = 2 * index + 1;
    const rightChild = 2 * index + 2;
    let smallest = index;

    const totalData = this.list.length;

    if(index <= totalData && this.list[index] > this.list[leftChild]) {
        smallest = leftChild;
    }

    if(index <= totalData && this.list[smallest] > this.list[rightChild]) {
        smallest = rightChild;
    }

    if(smallest !== index) {
        // Swap the data between this.list[index] and this.list[smallest] with ES6
        [this.list[index], this.list[smallest]] = [this.list[smallest], this.list[index]];

        // Same like code below

        // let temp = this.list[index];
        // this.list[index] = this.list[smallest];
        // this.list[smallest] = temp;

        // Recursive
        this.shiftDown(smallest);
    }
}
/*Pada kode diatas kita menambahkan sebuah fungsi atau method dengan nama shiftDown pada class MinHeap yang 
sebelumnya sudah kita buat. Fungsi atau method ini menerima satu buah parameter yaitu index. 



Tambah Data atau Insert Data

Pada Maximum Heap maupun Minimum Heap terdapat operasi tambah data. Algoritma untuk operasi tambah data atau 
insert data sendiri adalah sebagai berikut:

1. Simpan data atau elemen yang baru ditambahkan pada posisi paling akhir atau pada tree dengan level paling 
bawah pada posisi sebelah kanan setelah posisi data terakhir atau jika level sudah terpenuhi, maka simpan 
data paling baru tersebut pada level baru.
2. Lakukan proses reorganisasi heap atau operasi shift up pada node yang baru ditambahkan sampai syarat heap 
sudah terpenuhi.
Jika kita implementasikan algoritma diatas ke dalam kode, maka hasilnya menjadi seperti ini.*/
insertData(value); {
    // Add data to the array in the last index
    this.list.push(value);

    // Do the reorganize (shift up) the data
    this.shiftUp();
}
/*Fungsi atau method insertData sendiri menerima satu buah parameter dengan nama value, 
parameter tersebut nantinya akan diisi dengan data yang akan kita tambahkan pada list heap atau pada array.

Selain itu, di dalam fungsi atau method insertData juga kita memanggil fungsi shiftUp, seperti yang sudah 
dijelaskan pada bagian operasi Shift Up, ketika kita menambah data, maka akan ada kemungkinan bahwa data yang 
kita tambahkan akan lebih kecil dari nilai node atau simpul dari parentnya sendiri, hal tersebut nantinya akan 
menyebabkan tidak akan terpenuhinya persyaratan atau kondisi heap itu sendiri.


Hapus Data atau Delete Data

Pada Maximum Heap maupun Minimum Heap terdapat operasi hapus data atau delete data. 
Algoritma operasi hapus data atau delete data pada Minimum Heap sendiri adalah sebagai berikut:

1. Ambil nilai pada node atau simpul root.
2. Ambil nilai pada node atau simpul paling akhir, lalu simpan pada node atau simpul root.
3. Lakukan proses reorganisasi heap atau operasi shift-down pada node atau simpul root sampai syarat heap 
sudah terpenuhi.
Algoritma diatas jika kita impelementasikan ke dalam kode Javascript, maka akan menjadi seperti ini.


 */
deleteData(); {
    // Get the root value
    let root = this.list[0];

    // Root filled with the last data
    root = this.list.pop();

    // Do the reorganize ( shiftDown )
    this.shiftDown(0);

    return root;    
}
/*Pada method atau fungsi deleteData kita memanggil fungsi shiftDown, karena ketika kita melakukan penghapusan data,
nilai pada node atau simpul root pasti akan lebih besar dari simpul anak-anaknya. Hal tersebut tidak sesuai 
dengan sebuah kondisi atau syarat dari heap. Oleh karena itu, setelah penambahan data perlu dilakukan proses 
reorganisasi yaitu dengan melakukan proses shiftDown pada node atau simpul root agar memenuhi kondisi atau 
persyaratan dari heap. 


Kegunaan Struktur Data Heap
- Heap digunakan untuk membuat antrian prioritas (priority queue).
- Heap sort adalah salah satu algoritma sorting tercepat dengan kompleksitas waktu O(N* log(N), dan mudah 
diimplementasikan.
- Best First Search (BFS) adalah teknik informed search, di mana teknik ini diimplementasikan menggunakan 
antrian prioritas yang dibuat dengan heap.*/

class MinHeap {
  constructor (){
      this.list = []
  }

  insert (value){
      this.list.push(value)
      this.shiftUp()
  }

  shiftUp() {
      let index = this.list.length - 1;
  
      while(index > 0) {
        const parentIndex = Math.floor((index-1)/ 2);
  
        if(this.list[parentIndex] >= this.list[index]) {
          [this.list[index], this.list[parentIndex]] = [this.list[parentIndex], this.list[index]];
  
            // Same like code below
  
            // let temp = this.list[index];
            // this.list[index] = this.list[parentIndex];
            // this.list[parentIndex] = temp;
  
            index = parentIndex;
        } else {
            break;
        }
      }
  }

  shiftDown(index) {
      const leftChild = 2 * index + 1;
      const rightChild = 2 * index + 2;
      let smallest = index;
  
      const totalData = this.list.length;
  
      if(index <= totalData && this.list[index] > this.list[leftChild]) {
          smallest = leftChild;
      }
  
      if(index <= totalData && this.list[smallest] > this.list[rightChild]) {
          smallest = rightChild;
      }
  
      if(smallest !== index) {
          // Swap the data between this.list[index] and this.list[smallest] with ES6
          [this.list[index], this.list[smallest]] = [this.list[smallest], this.list[index]];
  
          // Same like code below
  
          // let temp = this.list[index];
          // this.list[index] = this.list[smallest];
          // this.list[smallest] = temp;
  
          // Recursive
          this.shiftDown(smallest);
      }
  }
  
  

  removeMin(){
      // if (this.list.length === 0) {
      //     return null;
      // }
       // Get the root value
  let root = this.list[0];

  // Root filled with the last data
  this.list[0] = this.list.pop();

  // Do the reorganize ( shiftDown )
  this.shiftDown(0);

  return root;    
  }
}
const minHeap = new MinHeap();

// Test case 1: Insert elements
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(15);
minHeap.insert(3);
minHeap.insert(8);

console.log(minHeap.list); 

const removedElement = minHeap.removeMin();
console.log("Removed Element:", removedElement); // Output: 3
console.log("Heap after removal:", minHeap.list); // Output: [5, 8, 15, 10]


// Test case 3: Insert more elements
minHeap.insert(2);
minHeap.insert(12);

console.log("Heap after insertions:", minHeap.list); 

// Test case 4: Remove the minimum element again
const removedElement2 = minHeap.removeMin();
console.log("Removed Element:", removedElement2); // Output: 2
console.log("Heap after removal:", minHeap.list); // Output: [5, 8, 15, 10, 12]