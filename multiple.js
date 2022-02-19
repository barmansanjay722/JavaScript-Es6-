

function stat(a,b){

    return [
        a + b,
        (a+b)/2,
        a-b
    ]
}

let [sum, avg, sub] = stat(20,10);

console.log(sum);
console.log(avg);
console.log(sub);