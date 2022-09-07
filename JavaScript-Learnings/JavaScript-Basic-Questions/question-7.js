// Write a function to generate random numbers and find if it’s prime or not.
// fastest solution, eleminates much iterations.

function isPrime(num){
    if(num == 0 || num == 1){
        return false;
    }

    if(num == 2 || num == 3){
        return true;
    }

    if(num%2 == 0 || num%3 == 0){
        return false;
    }

    for(let i=5; i*i<num; i=i+6){
        if(num%i == 0 || num%(i+2) == 0){
            return false;
        }
    }
    return true;
}

let num = Math.floor(Math.random()*1000)+1
console.log(num, isPrime(num))