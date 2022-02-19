
// const funA=()=> {
//     setTimeout(function(){
//         console.log('welcome A');
//     },2000)
// }
// const funB=()=>{
//     console.log('welocme B');
// }

// funA();
// funB();


// const perOne = (friend,callfriend) => {
//     console.log(`i am busy ${friend}. I will call you back`);
//     callfriend();
// }

// const PerTwo = () => {
//     console.log(`Hey i have called you`);
// }

// perOne('Sanjay',PerTwo);



const name = (surname)=>{
    console.log("Sanjay");
    surname();
}

const surname = ()=>{
    console.log("Barman");
}

name(surname);