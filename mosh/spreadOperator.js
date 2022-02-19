
const first = [1,2,3];
const second = [4,5,6];

const combined = first.concat(second);

// in spreadOperator can add element in middle of array (advantage)
const combined1 = [...first,'a', ...second,'b'];

const clone = [...first];


console.log(combined);
console.log(combined1);
console.log(clone);


// spread in object

const firstname = {name : 'Sanjay'};
const job = {job : 'Developer'};

const combinedobj = {...firstname,...job, location:"India"};
console.log(combinedobj);