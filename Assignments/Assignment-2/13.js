// Write a program to remove duplicate values from an array of integers.
let arr = [2,3,3,4,5,6,4,5,6,7,8,6,5,5,5];
let temp = [];
// arr2[0] = arr1[0];
// let res = 1;

// for(let i=0; i<arr1.length; i++){
//     if(arr2[res - 1] != arr1[i]){
//         arr2[res] = arr1[i];
//         res++;
//     }
// }

// for(let i=0; i<res; i++){
//     arr1[i] = arr2[i];
// }

// console.log(arr2)
// temp[0] = arr[0]

console.log(temp)
for(let i=0; i<arr.length; i++){
    if(temp.indexOf(arr[i]) == -1){
        temp.push(arr[i]);
    }
}

console.log(temp)