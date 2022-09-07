console.log("welcome");

// let ele = document.getElementById('myfirst');
// console.log(ele.className);
// console.log(ele.childNodes);
// console.log(ele.parentNode);
// console.log(ele.parentElement);

// ele.style.color = 'red';
// ele.innerText = 'good morning';
// ele.innerHTML = '<b>goodnight</b>';



// let sel = document.querySelector('#myfirst');
// sel.style.color = 'green';
// console.log(sel);


// let cont = document.querySelector('.no');

let cont = document.querySelector('div.container');

// console.log(cont.childNodes[0].nodeName);
// console.log(cont.children);

console.log(cont.firstElementChild.parentNode);
console.log(cont.firstElementChild.nextSibling);
console.log(cont.firstElementChild.nextElementSibling);
console.log(cont.firstElementChild.nextElementSibling.nextElementSibling);
