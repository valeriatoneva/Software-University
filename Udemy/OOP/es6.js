class Person{
    constructor(firstName, birthYear){
     this.firstName = firstName;
     this.birthYear = birthYear;
    }

    method(){
     console.log(`${this.firstName} and ${this.birthYear}`)
    }
}

let jessica = new Person('Jessica', 1996)