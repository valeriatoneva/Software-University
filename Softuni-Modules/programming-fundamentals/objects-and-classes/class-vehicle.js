class Vehicle {
    constructor(type, model, parts, fuel){
     this.type = type;
     this.model = model;
     this.parts = parts;
     this.fuel = fuel; // 200 
     this.parts.quality = this.parts.engine*this.parts.power; // po uslovie 
    }
    
    drive(lostFuel){
      return this.fuel -= lostFuel; 
    }
    
}
