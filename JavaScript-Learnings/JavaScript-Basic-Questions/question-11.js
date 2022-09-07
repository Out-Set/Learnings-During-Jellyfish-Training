// Write a program to display the duplicate characters of a String.

// let num = (2)(3);
// console.log(num)

let str = "Good Morning";
let x = str.toLowerCase();
x = x.split('');

var char = [];
var count = [];

for(let i of x){
    for(let i+1 of x){
        if(x[i] == x[j]){
            char.push(x[j]);
            count.push();
        }
    }
}
console.log(char)
console.log(count)

// function calres(){
//     let x = parseInt(document.getElementById("num1").value);
//     let y = parseInt(document.getElementById("num2").value);
//     document.getElementById("res").value = x+y;    
// }

// function reset(){
//     document.getElementById('num1').value = '';
//     document.getElementById('num2').value = '';
//     document.getElementById("res").value = '';
// }