
let person = {
    firstName: 'Sanjay',
    lastName: 'Barman'
}


let firstName = person.firstName;
let lastName = person.lastName;

console.log(firstName, lastName);



// setting default values

let person = {
    firstName: 'John',
    lastName : 'Doe',
    currentAge : 28
};

let{firstName, lastName,middleName= '' ,currentAge: age = 18} = person;

console.log(age);
console.log(middleName);