//! Spread Operator
// Memecah iterables menjadi single element

const player = [`Doobwuz`, `DikDns`, `Aidenzzy`, `Zeroopp`];
const oldPlayer = ["Zan", "AndikaCH", "Dicky00"];

// Menggabungkan dua array
//* console.log([...player, 'Dzikri', ...oldPlayer]);


// Menduplikasi Array
//* const allPlayers = [...player, 'Dzikri', ...oldPlayer];


// Mapping menjadi lebih mudah
//* const li = document.body.querySelectorAll("li");
//* const allPlayers = []
//* for (let i = 0; i < li.length; ++i){
//*     allPlayers.push(li[i].innerText);
//* }
//* const allPlayers = [...li].map(x => x.textContent);
//* console.log(allPlayers);


const name = document.querySelector(".name");

const char = [...name.textContent].map(c => `<span>${c}</span>`).join("");

console.log(char);

name.innerHTML = char;