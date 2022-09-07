// Check if the entered number is palindrome or not?

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

let num = 12321;

if(palCheck(num) == true){
    console.log(num + ": is a palindrome number.")
}
else{
    console.log(num + ": is not a palindrome number.")
}