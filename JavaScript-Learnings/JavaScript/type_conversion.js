console.log("Welcome");

let myVar = 34;
console.log(myVar, (typeof myVar));
myVar = String(34);
console.log(myVar, (typeof myVar));

let booleanVar = true;
console.log(myVar, (typeof booleanVar));
booleanVar = String(true);
console.log(myVar, (typeof booleanVar));

let date = String(new Date());
console.log(myVar, (typeof date));
let arr =  String([1,2,3,4,5])
console.log(arr.length, (typeof arr));

// or, you can do it as.

let i = 75;
console.log(i.toString())
console.log(i, (typeof i));

// parseInt, parseFloat, toFixed

let num1 = parseInt('34.08');
console.log(num1, (typeof num1));

let num = parseFloat('34.08');
console.log(num, (typeof num));



