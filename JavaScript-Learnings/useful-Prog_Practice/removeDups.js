// romove duplicats from an array of elements

let arr = [1,2,2,2,3,1,3,3,1,23,21,34,56,9,10,1,2];

arr = arr.sort()

function rem(arr){
let res = 1;
for(let i=1; i<arr.length; i++){
    if(arr[res - 1] != arr[i]){
        arr[res] = arr[i];
        res++;
    }
}
return res;
}

let n = rem(arr)
for(let i=0; i<n; i++){
    console.log(arr[i])
}
// console.log(arr)