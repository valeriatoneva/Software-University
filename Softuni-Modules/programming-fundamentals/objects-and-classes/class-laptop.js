let isOn = false;


class Laptop{
    constructor(info, quality){
        this.info = {
            producer: info.producer,
            age: info.age,
            brand: info.brand,
        };

        this.quality = quality;
    };

    turnOn (){
     return isOn = true;
     quality -= 1;
    }

    turnOff(){
     return isOn = false;
     quality -= 1;
    }
    
    showInfo(){
     return JSON.stringify(({
            producer: this.info.producer,
            age: this.info.age,
            brand: this.info.brand,
        }))
    }
}

let info = {producer: "Dell", age: 2, brand: "XPS"}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)