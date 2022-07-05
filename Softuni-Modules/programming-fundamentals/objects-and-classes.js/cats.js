function parseCats(catsAsArray) {
    class Cat{
        constructor (name, age){
        this.name = name;
        this.age = age;
        }
        
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`) // method, function into the class 
        } 
        }

        let allCats = [];

        for(let el of catsAsArray) { // takes each separate arr separated with , ;
        let pasedArrOfCats = el.split(" ");
        let catName = pasedArrOfCats[0];
        let catAge = pasedArrOfCats[1];
        let myCat = new Cat(catName, catAge); // parameters get into constructor;
        allCats.push(myCat); // gives me the class as array
       }
      
      for(let oneCat of allCats){
         oneCat.meow()
      }
}