let x = 10;

if(x == 10){
    let x = 20;
    console.log(x);    // print 20 because of scope variable
} 
console.log(x);    // print 10 bcz we declare as 10