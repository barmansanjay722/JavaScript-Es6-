
// const person = {
//     name: 'Sanjay',
//     Walk(){
//         console.log('walk');
//     }
// }

class Person {
    constructor(name){
        this.name = name;
    }
    Walk(){
        console.log('walk');
    }
}


const person = new Person('Sanjay');
person.Walk;
person.name;