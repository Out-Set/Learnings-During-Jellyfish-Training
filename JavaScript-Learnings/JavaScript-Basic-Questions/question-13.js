// Write a program to remove duplicate values from an array of integers.
 
let arr = [1,1,2,3,4,4,5,3,2];

for(let i in arr){
    let dups = arr[i];
    for(let j=i; j<arr.length; j++){
        if(arr[j] == dups){
            console.log(arr.pop(arr[j]));
        }
    }
}

console.log(arr)