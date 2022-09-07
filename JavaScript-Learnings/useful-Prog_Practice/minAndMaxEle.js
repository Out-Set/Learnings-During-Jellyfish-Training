function minMaxEle(arr){
    let min = arr[0];
    let max = arr[0];
    
    for(let i=1; i<arr.length; i++){
        if(min > arr[i]){
            min = arr[i];
        }
    }
    
    for(let i=1; i<arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    
    console.log("min = ", min,",","max = ",max)
}

minMaxEle([99999, 1, 345, 234, 21, 56789, 0]);