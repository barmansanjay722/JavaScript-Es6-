class Person {

     constructor(name){
         this.name = name;
     }

     getName(){
         return this.name;
     }

     static creatAnonymous(gender){
         let name = gender = 'Male' ? 'Sanjay Barman' : "Sanjana Barman";
         return new Person(name);
     }
}