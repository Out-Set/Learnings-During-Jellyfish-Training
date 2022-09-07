let str = "Hi, I am @Savan Prajapati $1997";
str = str.toLowerCase();

// removing space from an string
console.log(str.split(' ').join(''));
console.log(str.replaceAll(' ', ''));


// abstracting and removing vowels/consonents/nums and special chars from an string

let vowels = '';
let consoants = '';
let num = '';
let specChar = '';

for(let i=0; i<str.length; i++)
{
    if(str.charAt(i) >= 'a' && str.charAt(i) <= 'z'){
        if(str.charAt(i) == "a" || str.charAt(i) == "e" ||str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "a"){
            vowels += str.charAt(i);
            //str = str.replaceAll(str.charAt(i), '')
        }
        else{
            consoants += str.charAt(i);
            //str = str.replaceAll(str.charAt(i), '')
        }
    }

    else if(str.charAt(i) >= '0' && str.charAt(i) <= '9'){
        num += str.charAt(i);
        //str = str.replaceAll(str.charAt(i), '')
    }

    else{
        specChar += str.charAt(i);
        //str = str.replaceAll(str.charAt(i), '')
    }
}

console.log(vowels)
console.log(consoants)
console.log(num);
console.log(specChar);
console.log(str)