// 80/100
class Garden {
  constructor(spaceAvailable) {
    this.spaceAvailable = spaceAvailable;
    this.plants = [];
    this.storage = [];
  }

  addPlant(plantName, spaceRequired) {
    spaceRequired = Number(spaceRequired);

    if (this.spaceAvailable < spaceRequired) {
      throw new Error("Not enough space in the garden.");
    } else {
      this.spaceAvailable -= spaceRequired;
      let plant = { plantName, spaceRequired, ripe: false, quantity: 0 };
      this.plants.push(plant);
      return `The ${plantName} has been successfully planted in the garden.`;
    }
  }
  ripenPlant(plantName, quantity) {
    quantity = Number(quantity);
    let plant = this.plants.find((x) => x.plantName == plantName);
    if (!plant) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }

    if (plant.ripe) {
      throw new Error(`The ${plantName} is already ripe.`);
    }

    if (quantity <= 0) {
      throw new Error("The quantity cannot be zero or negative.");
    }

    plant.ripe = true;
    plant.quantity += quantity;

    if (quantity === 1) {
      return `${quantity} ${plantName} has successfully ripened.`;
    } else {
      return `${quantity} ${plantName}s have successfully ripened.`;
    }
  }
  harvestPlant(plantName) {
    let plantFind = this.plants.find((x) => x.plantName == plantName);

    if (!plantFind) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }
    if (!plantFind.ripe) {
      throw new Error(
        `The ${plantName} cannot be harvested before it is ripe.`
      );
    }
    let index = this.plants.indexOf(plantFind);
    let removedCurrPlant = this.plants.splice(index, 1);
    this.storage.push({
      plantName: removedCurrPlant.plantName,
      quantity: removedCurrPlant.quantity,
    });
    return `The ${plantName} has been successfully harvested.`;
  }
  generateReport() {
    let orderedPlants = this.plants
      .sort((a, b) => a.plantName - b.plantName)
      .map((p) => p.plantName);
    let output = [`The garden has ${this.spaceAvailable} free space left.`];

    output.push(`Plants in the garden: ${orderedPlants.join(", ")}`);

    if (this.storage.length == 0) {
      output.push(`Plants in storage: The storage is empty.`);
    } else {
      let formatedStorage = this.storage.map(
        (p) => `${p.plantName} (${p.quantity})`
      );
      output.push(`Plants in storage: ${formatedStorage.join(", ")}`);
    }

    return output.join("\n");
  }
}
const myGarden = new Garden(250);
console.log(myGarden.addPlant("apple", 20));
console.log(myGarden.addPlant("orange", 200));
console.log(myGarden.addPlant("raspberry", 10));
console.log(myGarden.ripenPlant("apple", 10));
console.log(myGarden.ripenPlant("orange", 1));
console.log(myGarden.harvestPlant("orange"));
console.log(myGarden.generateReport());
