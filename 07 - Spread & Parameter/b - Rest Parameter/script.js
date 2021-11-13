//! Rest Parameter (Sisa Parameter)

//// function test() {
//     // return myArgs;
////     return [...arguments];
//// }
//// console.log(test(1,2,3,4,5,6))


// //function sum(...argz) {
//     // Without Higher order function
//     // let total = 0;
//     // for(const number of argz){
//     //     total += number;
//     // }
//     // return total;


//    // return argz.reduce((a,b) => a + b);
//// }

// //console.log(sum(1,2,3,4,5,6,7, 22,50));


// Array Desctructuring with Rest Parameter
// //const kelompok = ['Dikcy', "Dzikri", 'Andika', 'Udin', 'Jaenal'];
// // [ketua, wakil, ...anggota] = kelompok;


// Object Destructuring
//// const Team = {
//  //   pm: "DikDns",
//  //   frontEnd1: 'Dzikri',
// //    frontEnd2: `Widi`,
// ///    backEnd: "Selly",
////     ux: 'Aqil',
// //    devOps: "Rafi"
// ///}
//// const {pm, ...team} = Team;


// Filtering
function filterBy(type, ...args){
    //// let empty = [];
    //// for(const data of args){
    ////     if (typeof(data) === type){
    ////         empty.push(data);
    ////     }
    //// }
    //// return empty;

    return args.filter(data => typeof data === type)
}
console.log(filterBy('number', 1,2, 'DikDns', true, undefined, 20, 39, `Dzikri`));