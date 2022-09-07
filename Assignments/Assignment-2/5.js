// Find the next palindrome number after 1991.
function palindrome(num){
    let n, rem, res = 0;
    n = num;
    while(num != 0){
    rem = num % 10;
    res = res*10 + rem;
    num = Math.floor(num/10);
    }
    if(n == res){
        return 1;
    }
    else{
        return 0;
    } 
}

let num = 1992;

while(palindrome(num) == 0){
    num = num + 1;
}

console.log(num)

