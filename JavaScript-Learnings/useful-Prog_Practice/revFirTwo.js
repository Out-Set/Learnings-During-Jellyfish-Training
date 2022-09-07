let arr = [1,2,3,4,5,6];
//output - [2, 1, 4, 3, 6, 5]

for(let i=0; i<arr.length-1; i+=2){
    let temp = arr[i];
    arr[i] = arr[i+1];
    arr[i+1] = temp;
}

console.log(arr)