// Reverse a given string.

let str = 'Good Morning';
let a = str.split(' ').join('');
console.log(a)

for( let i=0; i<a.length; i++)
{
    if(a.charAt(i) == ' '){
        a.replace(' ', '');
    }
}
console.log(a)
var res = '';
for(let i=str.length-1; i>=0; i--){

    res = res + str.charAt(i);

}


console.log(res);