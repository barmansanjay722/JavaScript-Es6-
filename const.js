// const RATE = 0.5;
// RATE = 0.2;

// console.log(RATE);

// const person = {age : 20 };
// person.age = 30;
// console.log(person.age);

// const person = Object.freeze({age : 30});
// person.age = 40;
// console.log(person.age);


const company = Object.freeze({
    name : 'ABC Group',
    address : {
        street : 'North 1st street',
        city : 'San Jose',
        state : 'CA',
        zipcode : 110092
    }
});


company.address.country = 'USA';   // add new element in company 

console.log(company);



// javaScript const in a for loop

let scores = [77,88,99];

for(let score of scores){
    console.log(score);
}

// don't want change of score then use const

let scoress = [90,99,78];

for(const score of scoress){
    console.log(score);
}