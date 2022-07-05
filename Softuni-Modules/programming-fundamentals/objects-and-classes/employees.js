function solve(input) {

    class Name {
      constructor(name, length) {
        this.name = name;
        this.length = length;
      }
    }
    let listOfEmployees = [];
    for (el of input) {
      let names = el;
      let personalNum = el.length;
      let info = new Name(names, personalNum);
      listOfEmployees.push(info);
    }
  
  listOfEmployees.forEach((item) => 
  console.log(`Name: ${item.name} -- Personal Number: ${item.length}`)
  );
  
  
  
  }