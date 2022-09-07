// let res = [];
// for(let i=2520; i<=10000; i++){
//     if((i%2==0) && (i%3==0) && (i%4==0) && (i%5==0) && (i%6==0) && (i%7==0) && (i%8==0) && (i%9==0)){
//         res.push(i);
//     }
// }

// console.log(res)

let res = [];
for(let i=2520; i<=10000; i++){
    for(let j=1; j<=10; j++){
        if((i%j==0) && (i%(j+1)==0)){
            res.push(i);
        }
    }
}

console.log(res)
