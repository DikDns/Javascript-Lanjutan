//! Callback

// Synchronous Callback
//// function halo(nama){
////     alert(`Halo ${nama}!`);
//// }

//// function tampilkanPesan(fn) {
////     const nama = prompt(`Masukkan nama: `);
////     fn(nama);
//// }
//// tampilkanPesan(nama => alert(`Halo ${nama}!`));

//// const player = [
////     {
////         "name" : "DikDns",
////         "id": '001',
////         'identifier': 'DnHqER',
////         'type': 'human',
////         "timePlayed": 130
////     },
////     {
////         "name" : "Doobwuz",
////         "id": '002',
////         'identifier': 'HTDsJeS',
////         'type': 'elf',
////         "timePlayed": 50
////     },
////     {
////         "name" : "Aidenzzy",
////         "id": '003',
////         'identifier': 'aSpOLk',
////         'type': 'human',
////         "timePlayed": 640
////     }
//// ];

//// console.log('Mulai!');
//// player.forEach(p => {
////     for(let i = 0; i < 10000000; i++){
////         let date = new Date();
////     }
////     console.log(p.name)
//// });
//// console.log('Selesai!');


//  Asynchronous Callback

//// Menyimpan Execution Proccess ke Web API melalui VANILLA JS
//// function getDataPlayer(url, success, error){
////     let xhr= new XMLHttpRequest();

////     xhr.onreadystatechange = () => {
////         if( xhr.readyState === 4 ){
////             if (xhr.status === 200){
////                 success(xhr.response);
////             } else if (xhr.status === 404){
////                 error();
////             }
////         }
////     }

////     xhr.open('get', url);
////     xhr.send();
//// }

//// console.log('Mulai!');

//// getDataPlayer('player.json', results => {
////     const player = JSON.parse(results);
////     player.forEach(p => console.log(p.name));
//// }, () => {

//// });

//// console.log('Selesai!');



// JQuery Library

console.log('Mulai!');

$.ajax({
    url: 'player.json',

    success: (player) => {
        player.forEach(p => console.log(p.name));
    },

    error: (e) => {
        console.log(e.responseText)
    }
});

console.log('Selesai!');