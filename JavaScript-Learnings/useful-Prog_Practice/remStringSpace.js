let str = "Hi, I am Savan Prajapati";

// console.log(str.replaceAll(' ', ''))
// console.log(str.split(' ').join(''))


for(let i=0; i<str.length; i++){
    if(str[i] == ' '){
        let temp = str[i];
        str[i] = str[i+1];
        str[i+1] = temp;
    }
}

console.log(str)