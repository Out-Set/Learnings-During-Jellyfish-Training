// let num = (2)(3);

// let res = [];
// res.push(num);

// let arr = ['hi', 'good', 'morning'];
// let str = arr.toString()
// console.log(str)

// console.log(str.replaceAll(",", " "))
// console.log(typeof str)

let str = "hi savan good evening";
let newstr = '';
// newstr += str.charAt(0).toUpperCase();
// newstr += str.substring(1,str.length-1);
// newstr += str.charAt(str.length-1).toUpperCase();
// console.log(newstr)

let arr = str.split(' ');
// console.log(arr)


for(let i=0; i<arr.length; i++){
    let word = arr[i].toString();
    newstr += word.charAt(0).toUpperCase();
    newstr += word.substring(1,word.length-1);
    newstr += word.charAt(word.length-1).toUpperCase();
    newstr += ' ';
}

console.log(newstr)
