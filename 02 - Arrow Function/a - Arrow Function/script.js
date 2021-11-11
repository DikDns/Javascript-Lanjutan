// const tampilNama = function (nama) {
//     return `Halo ${nama}!`;
// };

// const tampilNama = nama => console.log(`halo ${nama}!`);

let siswa = ['Andika', 'Dicky', 'Dzikri', 'Refi', 'Kanza'];

// let jumlahHuruf = siswa.map(function(nama){
//     return nama.length;
// });

// console.log(jumlahHuruf);



// let Siswa = siswa.map(nama => ({nama: nama, jumlahHuruf: nama.length}));
let Siswa = siswa.map(nama => ({nama, jumlahHuruf: nama.length}));

console.table(Siswa);