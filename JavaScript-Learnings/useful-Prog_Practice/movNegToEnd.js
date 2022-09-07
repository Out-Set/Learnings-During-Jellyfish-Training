
let arr = [1,-1,-2,3,4,1];

for(let i=0; i<arr.length-1; i++){
    if(arr[i] < arr[i+1]){
        // console.log(i)
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
}
console.log(arr);