//find the index of peak element in an array

function peakElement(arr){
    let max = arr[0];
    for(let i=0; i<arr.length; i++){
        if(max < arr[i+1]){
            max = arr[i+1];
        }
    }
    return max
}

console.log(peakElement([1,2,3,12,4,5,17]))