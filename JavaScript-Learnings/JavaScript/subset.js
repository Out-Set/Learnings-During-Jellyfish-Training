// function per(num){
//     let n = num;
//     let res = [];
//     for(let i=0; i<n.length; i++){
//         res.push(n[i]);
//         console.log(res)
//         //res = res + n[i];
//         //console.log(res);
//         for(let j=0; j<n.length; j++){
//             if()
//         }
//     }
// }
// let num = [1,2,3];
// //console.log(num.length)

// per(num);

let str = "000000567100000000";
let count = 0;
for(let i=str.length-1; i>=0; i--){
    if (str.charAt(i) == 0){
        count++;
    }
    else{
        break;
    }
}

console.log(count);

