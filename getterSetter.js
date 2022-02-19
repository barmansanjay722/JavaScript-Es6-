

class Person{
    constructor(name){
        this.name = name;
    }

    get name(){
        return this._name;
    }

    set name(newName){
        newName = newName.trim();

        if(newName == ''){
            throw 'The name cannot be empty';
        }

        this._name = newName;
    }
}

let person = new Person('Sanjay Barmana');
console.log(person.name);