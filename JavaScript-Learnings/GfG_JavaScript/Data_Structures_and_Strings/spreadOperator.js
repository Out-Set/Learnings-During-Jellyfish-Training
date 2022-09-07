//spread operator with array
let arr = [1,2,3,4,5];
let newArr = [...arr];
console.log(newArr);

let newArr2 = [0,...arr,6,7,8,9];
console.log(newArr2)


//spread operator with objects
let description = {
    firstName: 'savan',
    lastName: 'prajapai',
    yob: 1997,
}
let descriptionModified = {
    friends: ['prateek', 'anuj'],
    ...description,
}
console.log(descriptionModified)


//spread operator with strings
let str = 'Hi my name is Savan';
let strModified = [...str];
console.log(strModified)