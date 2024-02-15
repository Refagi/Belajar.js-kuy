/**Jest
Dalam penulisan kode pengujian, kita dapat menggunakan library tambahan untuk mempermudah penulisan kode pengujian.

Jest merupakan salah satu framework testing paling populer untuk menuliskan kode pengujian pada bahasa 
pemrograman JavaScript. Jest dapat digunakan untuk menuliskan script testing pada aplikasi backend maupun frontend.

Kita akan mencoba untuk menuliskan sebuah kode pengujian menggunakan framework jest. 

1.Membuat proyek baru dengan direktori bernama latihantesting
2.Setelah masuk ke direktori tersebut, kita dapat melakukan init project kita
3.Setelah proyek tersebut diinisialisasi. Selanjutnya kita dapat melakukan instalasi library framework jest.
npm install --save-dev jest
4.Setelah proses instalasi selesai, buka proyek di code editor.
5.Pada file package.json, kita tambahkan script untuk test dengan cara menambahkan baris kode berikut:
{
  "scripts": {
    "test": "jest"
  }
}
Penambahan script tersebut digunakan agar kita bisa menjalankan script test yang nanti kita buat menggunakan runner.*/




//Menulis Kode Pengujian
// test('deskripsi dari testcase kamu', () => {
//     expect(perintah).matcher(nilai yang diekspektasikan);
// });
 
// contoh
test('dua tambah dua adalah empat', () => {
    expect(2+2).toBe(4);
});

/*Dari contoh kode di atas expect(2 + 2) merupakan segmen yang berisi perintah yang menghasilkan nilai balikan, 
perintah tersebut dapat berupa fungsi ataupun perintah langsung.

toBe(4) disebut dengan matcher, berisi nilai yang diharapkan dari sebuah perintah yang dilakukan sebelumnya. 
Dalam jest sendiri terdapat berbagai matchers yang dapat digunakan, misalkan:

toBe(x)	bahwa nilai ekspektasi yang diharapkan adalah x
toEqual(x)	bahwa nilai ekspektasi yang diharapkan sama dengan x
toBeNull()	bahwa nilai ekspektasi yang diharapkan adalah null
toBeTruthy()	bahwa nilai ekspektasi yang diharapkan adalah truth
toBeFalsy()	bahwa nilai ekspektasi yang diharapkan adalah false

Selain matchers di atas, Anda juga dapat melihat matcher lain yang dapat digunakan di sini https://jestjs.io/docs/using-matchers.

Pada framework jest, kita juga dapat menuliskan sebuah test secara grouping berdasarkan karakteristik ataupun grup yang sama menggunakan segmen describe , misalkan sebagai berikut:*/

describe('pengujian olah aritmatika', () => {
   test('#1 dua tambah dua adalah empat', () => {
        expect(2+2).toBe(4);
   });
 
   test('#2 dua kali tiga adalah enam', () => {
        expect(2*3).toBe(6);
   });
});