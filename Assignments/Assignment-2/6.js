// Write a code to find the third largest number in an array without sorting.
function thirdLar(arr){

let firstEle = arr[0];
for(let i=0; i<=arr.length; i++){
    if(arr[i] > firstEle){
        firstEle = arr[i];
    }
}
console.log(firstEle);


let secondEle = arr[0];
for(let i=0; i<=arr.length; i++){
    if(arr[i] < firstEle && arr[i] > secondEle){
        secondEle = arr[i];
    }
}
console.log(secondEle);


let thirdEle = arr[0];
for(let i=0; i<=arr.length; i++){
    if(arr[i] < secondEle && arr[i] > thirdEle){
        thirdEle = arr[i];
    }
}
console.log(thirdEle);
}

let arr = [11,34,21,23,45,31,2,1,9,10];

thirdLar(arr);