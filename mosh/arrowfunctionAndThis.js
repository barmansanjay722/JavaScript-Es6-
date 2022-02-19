//  arrow function don't rewind this

// const person = {
//     talk(){
//         var self = this;
//         setTimeout(function(){
//             console.log('self',self);
//         },1000);
//     }
// };

// person.talk();


const person = {
    talk(){
        var self = this;
        setTimeout(function(){
            console.log('this',this);
        })
    }
}

person.talk();




// on o/p we got window object bcz callback function don't refer anyone so it refer parent object