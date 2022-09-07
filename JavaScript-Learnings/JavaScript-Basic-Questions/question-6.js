// Write a code to find the third largest number in an array without sorting.

let arr = [12,2,34,56,39,67,99];
let lar = 0;
for(let i=1; i<arr.length; i++){
    if(arr[i] > arr[0]){
        lar = arr[i]
    }
}

console.log(lar)