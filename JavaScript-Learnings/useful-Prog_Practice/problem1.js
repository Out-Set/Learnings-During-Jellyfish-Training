function fib(n)
{
    if(n <= 1)
       return n;
    return fib(n-1) + fib(n-2);    
}


while(res <= 100){
    res= fib(i);

    if(res<20 || res>100){
        break;
    }

    if(res<=20 || res>=100){
        continue;
    }

    else{
        fib.push(res);
    }
    i++;
}
console.log(fib)


