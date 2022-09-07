// Reverse each word in a string.
// Input:  Hi my name is <Your Name>
// Output: iH ym eman si <Your Name in Reverse>

let str = 'Hi my name is Savan Prajapati';
console.log("Initially: ",str);

strList = str.split(' ');


let revWord = '';
for(let i=0; i<strList.length; i++){

    let word = strList[i];
    revWord += ' ';

    for(let j=word.length-1; j>=0; j--){
        revWord += word[j];
    }
    
}
console.log("Finally: ",revWord.trim())
