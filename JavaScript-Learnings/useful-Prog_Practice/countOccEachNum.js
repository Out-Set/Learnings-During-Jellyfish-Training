let arr = [1,2,3,3,3,1,4,5,5,5,6,7,7,7,8,8,9];

for(let i=0; i<arr.length; i++){
    let num = arr[i];
    let count = 0;
    for(let j=0; j<arr.length; j++){
        if(arr[j] == num){
            count++;
        }
    }
    console.log(num, count);
}
