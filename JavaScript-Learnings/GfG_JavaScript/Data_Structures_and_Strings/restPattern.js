const arrZero = [0,1,2,3,4]
const arrOne = [5,6,7,8,9]
// const[first, second, ...rest] = [...arrZero, ...arrOne];
// console.log(rest)

//omitting the element
// const[first, , ...rest] = [...arrZero, ...arrOne];
// console.log(rest)


//rest with objects
let description ={
    name: 'savan',
    yob: 1997,
    friends: ['sanjeev', 'sandesh'],
}

const {
    name,
    ...rest
} = description;

console.log(name, rest)