//primitive 
// 7 types :String, number, boolean, null, undefined, symbol, BigInt

const name = "Vishwa";
const marks = 50;
const isFollow = true;
const coldTemp = null;
const age = undefined;
const mySymbol = Symbol('123')
const yourSymbol = Symbol('123')
// console.log(mySymbol === yourSymbol);

console.log(typeof mySymbol)

// Non-primitive
// objects, arrays, References

let student = {
    name:"vishwa",
    age:18,
    isFollow : false
}

let characters = ["mike","will","lucus","dustibun","steve"];

console.log(typeof characters)

let myFunction = function(){
    console.log("Hello world!");
}

myFunction();
console.log(typeof myFunction)