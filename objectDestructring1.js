
// function getPerson(){
//     return null;
// }

// let{ firstName, lastName } = getPerson();

// console.log(firstName, lastName);



// nested object destructuring

let employee = {
    id: 1001,
    name: {
        firstName : 'Sanjay',
        lastName : 'Barman'
    }
};

let {
    name:{
        firstName,
        lastName
    },
    name
} = employee;

console.log(firstName);
console.log(lastName);
console.log(name);

