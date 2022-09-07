function shiftEle(arr, n){
    if(n == 0){
        return false;
    }
    while(n > 0){
        n = n%arr.length;
        let firstEle = arr[0];
        for(let i=1; i<arr.length; i++){
            arr[i-1] = arr[i];
        }
        arr[arr.length-1] = firstEle;
        n--;
    }
    if(n < 0){
        n = -(n);
    while(n > 0){
        n = n%arr.length;
        let lastEle = arr[arr.length-1];
        for(let i=arr.length-1; i>0; i--){
            arr[i] = arr[i-1];
        }
        arr[0] = lastEle;
        n--
        }
    }   
    shiftEle(arr, n)
}
let arr = [1,2,3,4,5,6,7];
let shift = -2;
shiftEle(arr,shift);
console.log(arr)

