// Find the next palindrome number after 1991.

function palCheck(num){
    let init = num;
    let rev = 0;
    while(num != 0){
        let rem = 0;

        rem = num%10;
        rev = rev*10 + rem;
        num = Math.floor(num/10);
    }
    if(rev == init){
        return true;
    }
}

let num = 1991+1;
while(palCheck(num) != true){
    num++;
}

console.log("Next palindrome number after 1991: "+ num);