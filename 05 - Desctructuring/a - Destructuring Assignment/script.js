// Destructuring & Swap Array
let deArray = [1,2,3,4];
// Destruct
const [a, , , d] = deArray;
// Swap
const [x, y] =  [d, a];
console.log(`
${deArray}
destruct
a: ${a}
b: ${d}
swap
x: ${x}
y: ${y}\n\n`);


// Return Value Functions
function destruct() {
    return ['8', '4'];
};
const [first, second] = destruct();
console.log('sum from function: ' + first + second);


// Rest Parameter
const [one, ...index] = [4, 1, 5, 2 ,7, 3];
console.log(`\n
one: ${one}
rest index: ${index}\n\n`);


// Destructuring Object tanpa Deklarasi Object
({name, health} = {name: 'DikDns', health: 18});
console.log(`
Name: ${name}
Health: ${health}\n\n`);


// Property => Assign to New Variables
({name: n, health: h} = {name: 'DikDnsFake', health: 53});
console.log(`
Name: ${n}
Health: ${h}\n\n`);


// Destruct in Parameter
const player = {
    id: 1,
    name: n,
    health: h
};

function getHealth({name, health}){
    return name + ': ' + health;
};

console.log(getHealth(player));