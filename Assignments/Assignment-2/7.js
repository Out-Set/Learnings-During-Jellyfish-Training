// Write a function to generate random numbers and find if it’s prime or not.

function isPrime(n)
{
    if (n <= 1)
        return false;
        
    for (let i = 2; i < n; i++)
        if(n % i == 0)
            return console.log('not a prime number');
    return console.log('prime number');
}

let x = Math.random()*100;
x = Math.floor(x);
console.log(x);

isPrime(x);
