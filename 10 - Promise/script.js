//// $.ajax({
////     url: 'http:////www.omdbapi.com/?apikey=2459718a&s=avengers',
////     success: movies => console.log(movies.Search),
////     error: error => console.log(error.responseText)
//// })

//// const xhr = new XMLHttpRequest();
//// xhr.onreadystatechange = function() {
////     if(xhr.status === 200){
////         if(xhr.readyState === 4){
////             console.log(JSON.parse(xhr.response));
////         }
////     } else {
////         console.log(xhr.responseText);
////     }
//// };
//// xhr.open('get', 'http:////www.omdbapi.com/?apikey=2459718a&s=avengers');
//// xhr.send()

//// fetch('http:////www.omdbapi.com/?apikey=2459718a&s=avengers')
////     .then(response => response.json())
////     .then(response => console.log(response));



//! Promise 
// Object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang
// janji (terpenuhi / ingkar)
// state (fulfilled /  rejected /  pending)
// callback (result / reject / finally)
// aksi (then / catch)




// contoh 1
//// const ditepati = true;
//// const janji = new Promise((terima, tolak) => {
////     if (ditepati){
////         terima(`Janji telah di terima!`);
////     } else {
////         tolak(`Janji di tolak!`);
////     }
//// });

//// janji
////     .then(hasil => console.log(`Success: ${hasil}`))
////     .catch(hasil => console.log(`Error: ${hasil}`));


// Contoh 2
//// let ditepati = true;
//// const janji2 = new Promise((resolve, reject) => {
    ////     if (ditepati){
////         setTimeout(() => resolve(`Janji telah di terima!`), 2000);
////     } else {
////         setTimeout(() => reject(`Janji di tolak!`), 2000);
////     }
//// });

//// console.log('mulai...');
//// console.log(janji2.then(() => console.log(janji2)));
//// janji2
////     .finally( () => console.log(`Selesai Menunggu~`))
////     .then(hasil => console.log(`Success: ${hasil}`))
////     .catch(hasil => console.log(`Error: ${hasil}`));
//// console.log('akhir...');


// Contoh 3 Promise.all()

const movie = new Promise( (resolve) => {
    setTimeout(() => resolve([
        {
            title: 'Steins:Gate',
            genre: 'Sci-Fi, Thriller',
            rating: 9.2
        }
    ]) ,1500)
} );

const weather = new Promise( (resolve) => {
    setTimeout(() => resolve([
        {
            city: 'Bandung',
            condition: 'Thunderstrom',
            humidity: .7
        }
    ]) ,500)
} );

//// movie.then(result => console.log(result));
//// weather.then(result => console.log(result));

Promise.all([movie, weather])
    //// .then(result => console.log(result));
    .then(result => {
        const [movie, weather] = result;
        console.log(movie);
        console.log(weather);
    });