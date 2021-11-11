const players = ['DikDns', 'Doobwuz19', 'Aidenzyy'];

// for..of

for (const m of players){
    console.log(m);
};

// players.forEach((m, i) => {
//     console.log(`${m} is player no-${i + 1};`);
// });

for(const [i, m] of players.entries()) {
    console.log(`${m} is player no-${i + 1};`);
};



function sum() {
    // return arguments.reduce((a, i) => a + i);
    // arguments.forEach(a => sum += a);
    let sum = 0;
    for (const a of arguments){
        sum += a;
    };
    return sum;
}

console.log(sum(1,2,3,4,5));


const Players = {
    name: 'Andika',
    class: 'human',
    id: '101'
};

for (const p in Players){
    console.log(Players[p]);
};