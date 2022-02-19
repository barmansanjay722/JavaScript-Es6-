
// function getScores(){
//     return [70,80,90];
// }

// let [x,y,z] = getScores();

// console.log(x);
// console.log(y);
// console.log(z);



// function getNumbers(){
//     return [1,2];
// }

// let [x,y,z] = getNumbers();

// console.log(x);
// console.log(y);
// console.log(z);

function getScores(){
    return [1,2,4,5,6];
}
let[x,y,z,...args] = getScores();
// console.log(x);
// console.log(y);
console.log(args);