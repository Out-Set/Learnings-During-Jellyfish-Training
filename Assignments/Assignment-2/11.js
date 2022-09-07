// Write a program to display the duplicate characters of a String.
let str = "this is a book";
let x = str.toLowerCase();
x = x.split('');

console.log(x);
console.log(typeof x);
console.log(typeof x.length);

var char = [];
var count = [];

for(let i=0; i<=x.length; i++){
    for(let j=i+1; j<x.length; j++){
        if(x[i] == x[j]){
            char.push(x[i]);
            count.push(i++);
        }
    }
}












console.log(char);
console.log(count);

