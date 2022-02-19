
const person = {
    name: 'Sanjay',
    walk(){
        console.log(this);
    }
}

person.walk();

const walk = person.walk;
walk();      // undefined , bcz this keyword referencing parent object which is window object
