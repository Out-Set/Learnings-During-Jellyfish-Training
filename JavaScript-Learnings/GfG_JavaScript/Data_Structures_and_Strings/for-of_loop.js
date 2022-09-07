let fruits = ['Apple', 'Banana', 'Guava', 'Mango', 'Grapes']
console.log(fruits.entries())
// for(let item of fruits){
//     console.log(item)
// }

// for(let item of fruits.entries()){
//     console.log(item)
// }

console.log([...fruits.entries()]);
for(let [idx,item] of [fruits.entries()]){
    console.log(idx,item);
}
