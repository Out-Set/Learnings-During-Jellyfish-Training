let arr = [1,2,3,4,5,6,7,8,9];

let low = 0;
let high = arr.length-1;

console.log(arr[low])
console.log(arr[high])


while(low < high){
    let temp = arr[low];
    arr[low] = arr[high];
    arr[high] = temp;

    console.log(arr[low])
    console.log(arr[high])

    low++;
    high--;
}

console.log(arr)