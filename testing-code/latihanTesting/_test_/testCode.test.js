/**Untuk menjalankan kode pengujian tersebut, dapat menjalankan perintah runner yang sudah kita buat sebelumnya.

npm run testOne */

const { averageExams, isStudentPassExam } = require('../testCode.js');
 
test('it should handle non-number ', () => {
    const listValueOfExams = [80, 'a', '100', 80];
    expect(() => averageExams(listValueOfExams)).toThrow();
})

//bisa menggunakan grouping
describe('grade calculations', () => {
    test('it should return exact average', () => {
        const listValueOfExams = [80, 100, 100, 80];
        expect(averageExams(listValueOfExams)).toEqual(90);
    });
 
    /**
     * Integration testing
     */
    test('it should return exam passed status', () => {
        const listValueOfExams = [80, 100, 100, 80];
        expect(isStudentPassExam(listValueOfExams, 'Budi')).toEqual(true);
    })
 
 
    test('it should return exam failed status', () => {
        const listValueOfExams = [50, 40, 70, 80];
        expect(isStudentPassExam(listValueOfExams, 'Budi')).toEqual(false);
    })
})



/**
Setelah menuliskan semua test case yang ada, dengan jest kita dapat melihat laporan kode yang sudah terdapat 
pengujian dengan cara sebagai berikut:

npm run test -- --coverage

bisa juga langsung di json nya tambahin seperti ini
script {
    "test" : "jest --coverage --watchAll"
}

jadi ketika mau ngetest tidak usah pake npm run lagi, ini akan otomatis mengetest ketika ada perubahab code apapun


Setelah prosesnya selesai, jest akan secara otomatis men-generate laporan pengujian dalam folder report. 
Dalam folder tersebut terdapat:
 */