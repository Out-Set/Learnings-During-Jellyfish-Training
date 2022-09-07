// open console in brower and see the output.
// primitive and reference

// 1.priitive data types (memory allocated inside the stack)

// string
var name = "savan";
let num = '65';
console.log("My name is " + name);
console.log("Data type is " + (typeof name));

// numbers
let mark = 34;
console.log("Data type is " + (typeof mark));

// boolean
let isDriver = true;
console.log("Data type is " + (typeof isDriver));

// null
let nullVar = null;
console.log("Data type is " + (typeof nullVar));

// undefined
let unDef =undefined;
console.log("Data type is " + (typeof unDef));

// symbol - (added in ES6 javascript latese version)
/*  let
    const

*/


// 2. reference data types (memory allocated inside the heap)

// arrays
let myarr = [1,2,3,4,false, 'string']
console.log("Data type is " + (typeof myarr));

// object literals
let marks = {
    harry: 40,
    shubham: 50,
    rohan: 70,
    'j singh': 60
}
console.log("Data type is " + (typeof marks));

// functions
function findName(){

}
console.log("Data type is " + (typeof findName));

// dates
let date = new Date();
console.log("Data type is " + (typeof date));