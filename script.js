//tipe data pada JavaScript
/*
  -Number = Angka
  -String = huruf/kalimat
  -Boolean = true/false
  -array = menampung banyak nilai
*/

let jumlah = 123; // Number
let nama = "Diki Rahman"; //String
let hasil = true; //Boolean
let siswa =['siswa', 'siswa2', 'siswa3']; //array

// Variabel pada JavaScript
/* 
  var = variabel yang menggunakan function scope dan versi lama
  let = variabel yang menggunakan blok scope dan terbaru
  const = variabel yang memggunakan blok scope yang nilainya tidak dapat berubah
*/

//operator pada javascrit
/*
  -Aritmatika/matematika/binary = * / + - %
  -Penugasan/unary/assigment = = += *= -= /= %=
  -Perbandingan = == === > < <= >= !=
  
  binary = operan1 operator operan2
  unary = operan operator/operator = operan
  trinary = operan1 operator operan2 operator operand3
*/
let x = 10; //unary/assigment/penugasan
console.log(x * 2); //binary/aritmatika
console.log(x * 2 + 3); //trinary

// function pada JavaScript ada 2
/*
  -fungsi yang sudah disediakan oleh JavaScript
  -fungsi yang dibuat sendiri
*/

//fungsi yang sudah ada di JavaScript
/*
 console.log();
 confirm();
 alert();
 dll
*/

//fungsi yang dibuat sendiri
// function declaration

function Siswa(nama, kelas) {
  console.log(nama, kelas);
}

let siswa1 = Siswa("Diki", 12);

//functiom expression

let fungsi = function() {
    console.log("ini adalah function expression");
}