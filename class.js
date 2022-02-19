// function Person(name){
//     this.name = name;
// }

// Person.prototype.getName = function(){
//     return this.name;
// }


// var Sanjay = new Person("Sanjay Barman");
// console.log(Sanjay.getName);
// console.log(Sanjay instanceof Person);
// console.log(Sanjay instanceof Object);



//  es6 clas declaration

class Person {
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
}
let Sanjay = new Person('Sanjay Barman');

let name = Sanjay.getName();
console.log(name);
console.log(typeof Person);