let a = {
    print: function(){
        setTimeout(() => {
            console.log('print + setTimeout'. this);
        }, 1000);
        console.log('print', this);
    },
    display: function(){
        setTimeout(function(){
            console.log('display + setTimeout', this);
        }, 1000);
        console.log('display', this);
    }
}

a.print();
a.display();



let Person1 = {
    name: 'Sajal',
    print: function(){
        console.log(this.name);
    }
}

let Person2 = {
    name: 'Neeraj',
    print: function(){
        console.log(this.name);
    }
}

Person1.print();
Person2.print();


// Constructor function
function Person(name){
    this.name = name;
    this.print = function(){
        console.log(this.name);
    }
}

let x = new Person('Sajal');
let y = new Person('Neeraj');

x.print();
y.print();



// Factory function
function createPerson(name){
    return{
        name,
        print: function(){
            console.log('factory',this.name);
        }
    }
}

let z = createPerson('Savan');
console.log(z)

// Factory function
function createPerson(name, surName, work){
    return{
        name,
        surName,
        work,
        print: function(){
            console.log('factory',this.name, this.surName, this.work);
        },
    }
}

let d = createPerson('Savan','prajapati','dev');
console.log(d);
