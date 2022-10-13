const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  };
  
let jonas = new Person("Jonas", 1991); // this gives me an obj 

Person.prototype.calcAge = function(){
    console.log('Something') // only one copy 
}

jonas.calcAge()

Person.prototype.species = 'Homo Sapiens'; // species property
console.log(jonas.species)