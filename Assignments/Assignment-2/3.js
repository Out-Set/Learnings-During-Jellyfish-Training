// Reverse each word in a string.
// Input:  Hi my name is <Your Name>
// Output: iH ym eman si <Your Name in Reverse>

var str = 'Hi my name is Savan';

str = str.split(' ').reverse();
console.log(typeof str);
console.log(str[0])
let res = [];

for(let i=0; i<=str.length; i++){
    str[i].reverse();
    
}
console.log(str);