
const person = {
    name : 'Sanjay',
    //function inside object is called method 
    walk : function(){},
    // in es6 this is how we can initialized method
    talk(){}
};



// if we know the call function then we use . notation

person.talk();
person.name = '';

// other way we can call method in javascript
const targetMember = 'name';
person[targetMember.value] = 'Sanjay';