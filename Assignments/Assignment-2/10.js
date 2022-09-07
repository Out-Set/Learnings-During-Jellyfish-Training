// In an array of 100 elements, 1 to 100 are stored but 0 is stored for one random number. Write a program to find the missing number.

let arr = [];
while(arr.length<100){
    let num = Math.floor(Math.random()*100)+1;
    if(arr.indexOf(num) == -1){
        arr.push(num);
    }
}

arr.sort(function(a, b){
    return (a-b);
})
console.log(arr)

let b = Math.floor(Math.random())


console.log(b)