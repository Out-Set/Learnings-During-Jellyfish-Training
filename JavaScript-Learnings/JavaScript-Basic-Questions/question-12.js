// Write a program to find the occurrences of each number of an array of 20 elements.
let arr = [1,1,2,3,4,4,5,3,2];

let num, count;
for(let i=0; i<arr.length; i++){
    console.log(num, count);
    count = 0;
    num = arr[i];
    for(let j=0; j<arr.length; j++){
        if(arr[j] == num){
            count++;
        }
    }
}

