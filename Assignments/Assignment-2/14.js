// A) [[‘Developer’,‘Developer’,‘Developer’,‘Developer’,‘Developer’],[‘Designer’,‘Designer’‘Designer’],[‘QA’, ‘QA’, ‘QA’,‘QA’], [‘Manager’]]
// B) [‘Developer’,‘Developer’,‘Developer’,‘Developer’,‘Developer’,‘Designer’,‘Designer’‘Designer’,‘QA’, ‘QA’, ‘QA’,‘QA’, ‘Manager’]

let a = {
    Developer: 5,
    Designer: 3,
    QA: 4,
    Manager: 1
    }

console.log(a.Developer)
let b = [];

let dev = [];
let des = [];
let qa = [];
let man = [];


for(let i=0; i<a.Developer; i++){
    dev.push('Developer')
}

for(let i=0; i<a.Designer; i++){
    des.push('Designer')
}

for(let i=0; i<a.QA; i++){
    qa.push('QA')
}

for(let i=0; i<a.Manager; i++){
    man.push('Manager')
}

// b = b[0].push(dev)
// b = b[0].push(des)
// b = b[0].push(qa)
// b = b[0].push(man)

b = b.concat(dev, des,qa, man);


console.log(b)