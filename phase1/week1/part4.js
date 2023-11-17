/*Searching Algorithm

Algoritma pencarian (searching algorithm) adalah serangkaian langkah atau metode yang digunakan untuk 
menemukan keberadaan atau lokasi suatu elemen dalam himpunan data tertentu. Tujuan dari algoritma pencarian 
adalah untuk menemukan elemen yang dicari dengan efisien, terutama pada himpunan data yang besar.

Ada beberapa jenis algoritma pencarian yang umum digunakan, di antaranya:

1. Pencarian Linear (Sequential Search): Algoritma ini melakukan pencarian dengan cara mengunjungi setiap elemen 
dalam himpunan data satu per satu hingga elemen yang dicari ditemukan. Ini adalah pendekatan yang sederhana, 
tetapi kurang efisien untuk himpunan data besar karena memerlukan waktu linear dalam hal jumlah elemen.

algoritma ini sering kalian pakai di phase 0 secara tidak sadar. dan biasanya kalian menggukana double for loop untuk mencari sesuatu.
double for loop ini mengakibatkan 2x linear time complexity yaitu O(N²) — Quadratic
*/
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Mengembalikan indeks elemen yang ditemukan
        }
    }
    return -1; // Mengembalikan -1 jika elemen tidak ditemukan
}

// - Time Complexity: O(n) - Linear Time Complexity

/*2. Pencarian Binary (Binary Search): Algoritma ini hanya dapat digunakan pada himpunan data yang sudah terurut. 
Pencarian dimulai dengan membandingkan elemen tengah himpunan data dengan elemen yang dicari. Berdasarkan hasil 
perbandingan, setengah himpunan data yang tidak mungkin mengandung elemen yang dicari dapat diabaikan. 
Hal ini menghasilkan waktu pencarian yang lebih cepat dibandingkan dengan pencarian linear. Binary search hanya 
memerlukan waktu logaritmik dalam hal jumlah elemen.

(Catatan: Binary search hanya berlaku pada himpunan data terurut)
 */
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid; // Mengembalikan indeks elemen yang ditemukan
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1; // Mengembalikan -1 jika elemen tidak ditemukan
}

// -Time Complexity: O(log n) - Logarithmic Time Complexity

/*3. Pencarian Jump (Jump Search): Algoritma ini juga digunakan pada himpunan data yang terurut. 
Ia melompati sejumlah elemen dalam setiap iterasinya, dengan langkah yang semakin pendek ketika elemen yang 
lebih dekat dengan elemen yang dicari ditemukan.


Pemahaman tentang algoritma pencarian sangat penting dalam ilmu komputer dan pemrograman karena banyak masalah 
yang melibatkan pencarian data dalam berbagai konteks. Pemilihan algoritma pencarian yang tepat dapat memberikan 
efisiensi yang lebih baik dalam menemukan elemen yang dicari.


(Catatan: Jump search berlaku pada himpunan data terurut)
 */
function jumpSearch(arr, target) {
    const n = arr.length;
    let step = Math.sqrt(n);
    let prev = 0;

    while (arr[Math.min(step, n) - 1] < target) {
        prev = step;
        step += Math.sqrt(n);
        if (prev >= n) {
            return -1;
        }
    }

    while (arr[prev] < target) {
        prev++;
        if (prev === Math.min(step, n)) {
            return -1;
        }
    }

    if (arr[prev] === target) {
        return prev; // Mengembalikan indeks elemen yang ditemukan
    }

    return -1; // Mengembalikan -1 jika elemen tidak ditemukan
}

// -Time Complexity: O(√n) - Square Root Time Complexity



/*LOGIC NOLEP (searchAlgo.js)

Soal: Mencari Indeks dalam Array yang Terrotasi (searchRotatedArray)
Wajib menggunakan binary search 

Deskripsi: Anda diberikan sebuah array bilangan bulat nums yang terurut secara menaik 
(dengan nilai-nilai yang berbeda-beda).


Sebelum diserahkan ke dalam fungsi Anda, array nums kemungkinan telah dirotasi pada indeks pivot yang tidak 
diketahui k (1 <= k < panjang nums) sehingga array yang dihasilkan adalah [nums[k], nums[k+1], ..., nums[n-1], 
nums[0], nums[1], ..., nums[k-1]] (0 berindeks). Sebagai contoh, [0,1,2,4,5,6,7] mungkin dirotasi pada indeks 
pivot 3 dan menjadi [4,5,6,7,0,1,2].

Diberikan array nums setelah rotasi yang mungkin dan sebuah bilangan bulat target, kembalikan indeks dari target 
jika terdapat dalam array nums, atau -1 jika tidak ada.

Anda harus menulis algoritma dengan kompleksitas waktu O(log n).

Contoh 1:
Input: nums = [4,5,6,7,0,1,2], target = 0

Output: 4

Contoh 2:
Input: nums = [4,5,6,7,0,1,2], target = 3

Output: -1

Contoh 3:
Input: nums = [1], target = 0

Output: -1

Constraints:

1 <= panjang nums <= 5000
-104 <= nums[i] <= 104
Semua nilai pada nums bersifat unik.
nums adalah array yang terurut secara menaik yang kemungkinan telah dirotasi.
-104 <= target <= 104*/


const searchRotatedArray = (nums, target) => {
    //code
    let start = 0
    let end = nums.length-1

    while(start <= end){
        let mid = Math.floor((start + end) / 2)

        if (nums[mid] === target){
            return mid
        } 
        //jika nums[start] = nums[0] = 4 <= nums[mid] = nums[3] = 7, (jika kiri terurut)
        if (nums[start] <= nums[mid]){
            //jika nums[0] <= 0 && 0 < nums[3]
            if (nums[start] <= target && target < nums[mid]){
                end = mid - 1
            } else {
                start = mid + 1
            }
        } else {
                if (nums[mid] < target && target <= nums[end]){
                    start = mid + 1
                } else {
                    end = mid - 1
                }
        }
    }
    return - 1


    // let start = 0
    // let end = nums.length-1

    // while (start <= end){
    //     let mid = Math.floor((start + end) / 2)

    //     if (nums[mid] === target){
    //         return mid
    //     } else if (nums[mid] > target){
    //         end = mid - 1
    //     } else {
    //         start = mid + 1
    //     }
    // }
    // return -1
}
 // Test Case
console.log(searchRotatedArray([4, 5, 6, 7, 0, 1, 2], 0)); // Output: 4
console.log(searchRotatedArray([4, 5, 6, 7, 0, 1, 2], 3)); // Output: -1
console.log(searchRotatedArray([1], 0)); // Output: -1
console.log(searchRotatedArray([6, 7, 0, 1, 2, 4, 5], 7)); // Output: 1
console.log(searchRotatedArray([4, 5, 6, 7, 8, 1, 2, 3], 6)); // Output: 2
console.log(searchRotatedArray([3, 4, 5, 6, 7, 8, 1, 2], 8)); // Output: 5
console.log(searchRotatedArray([5, 6, 7, 8, 1, 2, 3, 4], 1)); // Output: 4
console.log(searchRotatedArray([2, 3, 4, 5, 6, 7, 8, 1], 9)); // Output: -1
console.log(searchRotatedArray([3, 1], 1)); // Output: 1
console.log(searchRotatedArray([5, 1, 3], 5)); // Output: 0

