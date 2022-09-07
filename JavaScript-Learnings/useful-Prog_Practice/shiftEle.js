
function shiftEle(arr, shift){
    if(shift >= 0){
        shift = shift%arr.length;
        let rev = [];
        for(let i=arr.length-shift-1; i>=0; i--){
            rev.push(arr[i]);
        }
        for(let i=arr.length-1; i>=arr.length-shift; i--){
            rev.push(arr[i]);
        }
        console.log(rev.reverse()) 
    }
    else{
        shift = -(shift);
        shift = shift%arr.length;
        let rev = [];
        for(let i=shift-1; i>=0; i--){
            rev.push(arr[i]);
        }
        for(let i=arr.length-1; i>=shift; i--){
            rev.push(arr[i]);
        }
        console.log(rev.reverse())    
    }
}
    
let arr = [1,2,3,4,5,6,55555,-12,'a','kgl',0.78]
let shift = 2;
    
shiftEle(arr, shift);