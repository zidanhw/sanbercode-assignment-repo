// variabel let, const, dan var
let var1 = 100;
var1 = 'Halo juga'; // bisa diubah nilai variabelnya

const var2 = 1945; // tidak bisa diubah nilai dari variabelnya.

console.log(var3); // hasilnya undefined karena var3 di-hoist (dideklarasikan tanpa menginisialisasikan variabelnya)
var var3 = 5; 
console.log(var3); // hasilnya 5 karena telah dimasukkan nilai 5 ke dalam variabelnya.

// tipe data primitif
let text = 'Nama saya Zidan'; // String
let angka = 29999990; // Number
let isTrue = false; // Boolean
let input = null; // null
let x; // undefined
const symbol = Symbol('description'); // Symbol
const bigNumber = 12949101410971947194709n; //BigInt (ES11/ES2020)

// tipe data non-primitif
// Object
const employee = {
        name: 'Zidan Hawari',
        age: 22,
        sapa: () => {return 'Hai'}
} 

// Array
const kumpulanAngka = [1,2,3,4,5,6,7,8];

// Operator aritmatika
// (+)
let angka1 = 1;
let angka2 = 99;
let angka3 = angka1 + angka2; // 100
// (-) 
let angka4 = angka1 - angka2; // -98
// (*)
let angka5 = angka1*angka1; // 1
// (/)
let angka6 = angka2/9; // 11
// (%)
let angka7 = angka2 % 2; // 1

// Operator perbandingan
const j = 10;
const k = 50;

console.log(j == k);
console.log(j === k);
console.log(j != k);
console.log(j !== k);
console.log(j !== k);
console.log(j > 5);
console.log(j < 5);
console.log(k <= 50);
console.log(k >= 150);
 