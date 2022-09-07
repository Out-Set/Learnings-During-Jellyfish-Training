// Write logic to swap values of two variables without using a third variable.

function swap(a, b){
    console.log('before swap: a = '+a+', b = '+b)
    a = a + b;
    b = a - b;
    a = a - b;
    console.log(b)
    console.log('after swap: a = '+a+', b = '+b)
}

swap(2,3);

// learn how to swap in one line