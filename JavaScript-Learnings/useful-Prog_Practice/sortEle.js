// sorting in ascending order
// sorting in descending order - if(arr[i] < arr[j])

let arr = [12,34,56,67,1,3,23,0,99,87];
for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
    if(arr[i] > arr[j]){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
}

console.log(arr)