//! 1. Creation Phase (global context)
/*  
    a) nama var = undefined;
    b) nama function = fn();
    c) hoisting = diangkat ke baris paling atas
    d) object Window = global object
    e) var this = window;
*/

//! 2. Execution Phase
/*  
    a) mengeksekusi semua baris perintah sesuai urutan baris
*/


function satu() {
    var nama = 'DikDns (local fn)'
    console.log(nama);
};

function dua() {
    console.log(nama);
};


console.log(nama);
var nama = 'DikDns (global)'
satu();
dua('dikdns failed no arguments');
console.log(nama);
console.log(dua());


