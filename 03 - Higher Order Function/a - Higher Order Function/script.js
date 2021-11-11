const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -2 ,-3, -4, -5, -6, -7, -8, -9, 0];



//! FILTER
// Without Filter Method
let greaterThan = (array, number) => {
    const tempArray = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] > number){
            tempArray.push(array[i]);
        }
    }
    return tempArray;
};

// With Filter Method
let filterGreaterThan = number.filter(x => x > 4);

// Log the result
console.log(`Not Using Filter: ${greaterThan(number, 4)}`);
console.log(`Using Filter Method: ${filterGreaterThan}\n\n\n\n`);



//! MAP
const timesFour = filterGreaterThan.map(x => x * 4);

// Log the result
console.log(`Original Array: ${filterGreaterThan}`);
console.log(`Mapped TimesFour Array: ${timesFour}\n\n\n\n`);



//! REDUCE
//  5 - (defaultCurrentValue) - 6 - 7 - 8 - 9 = -25
const subractAllOfThem = filterGreaterThan.reduce((accumulator, currentValue) => accumulator - currentValue);

// Log the result
console.log(`Subtracted 5 - (defaultValue) - 6 - 7 - 8 - 9: ${subractAllOfThem}\n\n\n\n`);



//! Method Chaining
// search number 8 and 4 => divide by 4 => sum them
const methodChaining = number.filter(x => x === 4 || x === 8)
    .map(x => x / 4)
    .reduce((a, b) => a + b);

// Log the result
console.log(`Method Chaining: \n 
    Search Number: ${number.filter(x => x === 4 || x === 8)} \n
    Dividing Them: ${number.filter(x => x === 4 || x === 8).map(x => x / 4)} \n
    Sum: ${methodChaining}`);