
class Person {
    constructor(name){
        this.name = name;
    }
    Walk(){
        console.log('wald');
    }
}


class Teacher extends Person{
    constructor(name, degree){
        super(name);                    // super use parent reference call
        this.degree = degree;
    }
    teach(){
        console.log('teach');
    }
}

const teacher = new Teacher('Sanjay','B.Tech');
// now teach has all the method walk, teach and also all the constructor value name and degree