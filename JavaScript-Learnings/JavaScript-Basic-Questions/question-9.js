// Write logic to swap values of two variables without using a third variable.

function noSwap(num1, num2){
    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;

    console.log("After swap: ", num1, num2)
}

console.log("Before swap: ", 3, 4);
noSwap(3,4);