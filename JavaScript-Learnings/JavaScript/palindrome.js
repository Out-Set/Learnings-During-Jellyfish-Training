// palindrome
let num = 12321;
let rem = 0, res = 0;
let orig = num;

while(num != 0)
{
    rem = num % 10;
    res = res*10 + rem;
    num = Math.floor(num/10);
}

res==orig?console.log('Pal'):console.log('Not Pal');


// 
