// object destructring with for 
const ratings = [
    {user : 'John', score : 3},
    {user : 'Jane', score : 4},
    {user : 'Sanjay', score : 5},
    {user : 'Ritu', score : 5}
]

let sum = 0;

for(const {score} of ratings){
    sum += score;
}

console.log(sum);


// iterating over String

let str = 'Sanjay';

for(let c of str){
    console.log(c);
}

// iterating over map object
let colors = new Map();

colors.set('red', '#ff0000');
colors.set('green', '#00ff00');
colors.set('blue', '#0000ff');

for(let color of colors){
    console.log(color);
}


// iterating over set object

let nums = new Set([1,2,3]);

for(let num of nums){
    console.log(num);
}
