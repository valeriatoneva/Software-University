function solve(input) {
    let obj = {};
    let count = 0;
    for (let el of input) {
      let [city, population, gold] = el.split("||");
      population = Number(population);
      gold = Number(gold);
      count++;
      if (city === "Sail") {
        break;
      }
      if (!obj.hasOwnProperty(city)) {
        obj[city] = { population, gold };
      } else {
        obj[city].population += population;
        obj[city].gold += gold;
      }
    }
  
    for (let i = count; i < input.length; i++) {
      let [command, town, firstParam, lastParam] = input[i].split("=>");
      if (command === `End`) {
        break;
      }
  
      switch (command) {
        case `Plunder`:
          let people = Number(firstParam);
          let gold = Number(lastParam);
          obj[town].population -= people;
          obj[town].gold -= gold;
            console.log(
              `${town} plundered! ${gold} gold stolen, ${people} citizens killed.`
            );
          if (obj[town].population <= 0 || obj[town].gold <= 0) {
            delete obj[town];
            console.log(`${town} has been wiped off the map!`);
          }
  
        case `Prosper`:
          let goldAmount = Number(firstParam);
          if (goldAmount < 0) {
            console.log("Gold added cannot be a negative number!");
            break;
          }
          if(obj.hasOwnProperty(town)){
          obj[town].gold += goldAmount;
          console.log(
            `${goldAmount} gold added to the city treasury. ${town} now has ${obj[town].gold} gold.`
          );
          }
          break;
      }
    }
  
  function isEmpty(obj) {
     for(let el in obj) {
      if(obj.hasOwnProperty(el))
        return false; // object has properties
      } 
        return true; // object doesn’t have any properties
  }
  
  let settlements = Object.entries(obj);
  let settlementCount = settlements.length;
  
  if(isEmpty(obj) === false){
      console.log(`Ahoy, Captain! There are ${settlementCount} wealthy settlements to go to:`)
      for(let [key, value] of Object.entries(obj)){
          console.log(`${key} -> Population: ${value.population} citizens, Gold: ${value.gold} kg`)
      }
  }
  
  
  }
  solve([
    "Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End",
  ]);
  