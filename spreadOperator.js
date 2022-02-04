const odd = [1,2,3];
const combined = [2,4,6,...odd];
console.log(combined);

const combined1 = [...odd, 2,4,6];
console.log(combined1);



let rivers = ['Nile', 'Ganges', 'Yangte'];
let moreRivers = ['Danube', 'Amazon'];

//[].push.apply(rivers, moreRivers);    // in es5
rivers.push(...moreRivers);      // in es6 more efficient
console.log(rivers);

// constructing array literal
let initialChars = ['A', 'B'];
let chars = [...initialChars, 'C', 'D'];
console.log(chars); // ["A", "B", "C", "D"]

//concating arrays
let numbers = [1, 2];
let moreNumbers = [3, 4];
let allNumbers = [...numbers, ...moreNumbers];
console.log(allNumbers); // [1, 2, 3, 4]





