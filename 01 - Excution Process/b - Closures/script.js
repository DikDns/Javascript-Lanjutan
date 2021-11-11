
let add = (function () {
    let counter = 0;
    return function() {
        return ++counter;
    }
})();   //Imediatly Invoke Function

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());