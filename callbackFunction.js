
// for(var i=0;i<5;i++){

//     setTimeout(function(){
//         console.log(i);
//     },1000);                    // make function wait for 1 sec
// }




// in Es5 we solove the issue by creating another function 

// for(var i=0;i<5;i++){

//     (function(j){
//         setTimeout(function(){
//             console.log(i);
//         },1000);
//     })(i);
// }


// in es6 replace the variable with let this will work

for(let i=0;i<5;i++){
    setTimeout(function(){
        console.log(i);
    },1000);
}


// callback function

function greeting(name){
    console.log('hello '+name);
}

function processuserInput(callback){
    var name = 'Sanjay';
    callback(name);
}

processuserInput(greeting);