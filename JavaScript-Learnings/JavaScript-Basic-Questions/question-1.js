// Reverse a given string.

let str = "Hi, my name is Savan Prajapati";
let revStr = '';
for(let i=str.length-1; i>=0; i--){
    revStr += str.charAt(i);
}

console.log(revStr)