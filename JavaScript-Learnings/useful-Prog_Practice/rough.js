let arr = [1,2,1,5,4,2,54,23,6,9,5];

let firLar = 0;
let index = 0;
for(let i=1; i<arr.length; i++){
    if(arr[i] > firLar){
        firLar = arr[i];
        index = i;
    }
}
console.log(firLar)
console.log(index)
arr.splice(index,1);
console.log(arr)
