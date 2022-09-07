// Write a function to generate random numbers and find if it’s even or not.

function evenOdd(num){
    return num%2==0?true:false;
}

let num = Math.floor(Math.random()*1000)+1;

console.log(num, evenOdd(num))