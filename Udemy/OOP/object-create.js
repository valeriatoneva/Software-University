const PersonProto = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  };
  
let jonas = new Person("Jonas", 1991); // this gives me an obj 
let StudentProto = Object.create(PersonProto); // person proto becomes the prototype for student proto
let jay = Object.create(PersonProto)//
// prototype chain;
