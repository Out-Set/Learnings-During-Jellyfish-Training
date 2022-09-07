// sum of prime numbers in a given range

function primeNo(n){
    if(n == 0 || n == 1){
        return false;
    }

    for(let i=2; i<n; i++){
        if(n%i == 0){
            return false;
        }
    }
    return true
}
let from = 0;
let upto = 10;
let primeNumbers = 0;

for(let i=from; i<=upto; i++){
    if(primeNo(i) == true){
        primeNumbers += i;
    }
}

console.log(primeNumbers)