// Write a function to generate random numbers and find if it’s even or not.

function fun(num){
    num = Math.floor(num)
    console.log(num);
    num%2==0?console.log('even'):console.log('not even')
}

let x = Math.random() * 100;
fun(x);

hu