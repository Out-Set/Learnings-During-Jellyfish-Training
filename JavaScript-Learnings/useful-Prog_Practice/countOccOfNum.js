function countOcc(arr, n){
    let count = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] == n){
            count++;
        }
    }
    return count;
}

let arr = [1,2,3,3,3,1,4,5,5,5,6,7,7,7,8,8,9];
let n = 8;

console.log(countOcc(arr,n))