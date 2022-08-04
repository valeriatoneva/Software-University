function solve(input){
    let n = Number(input.shift());
    let obj = {}
        for (let i = 0; i < n; i++) {
            let [car, mileage, fuel] = input[i].split('|');
            mileage = Number(mileage);
            fuel = Number(fuel);
            obj[car] = {mileage, fuel};
          }
    
          for (let i = n; i <= input.length; i++) {
            const [command, car, firstParam, lastParam] = input[i].split(' : ');
            if (command === 'Stop') {break;}
            
            switch (command) {
              case 'Drive':
                const distance = Number(firstParam);
                const gas = Number(lastParam);
                if(obj[car].fuel < gas){
                    console.log(`Not enough fuel to make that ride`)
                } else {
                    obj[car].mileage += distance
                    obj[car].fuel -= gas;
                    console.log(`${car} driven for ${distance} kilometers. ${gas} liters of fuel consumed.`)
                }
                if(obj[car].mileage >= 100000){
                    delete obj[car];
                    console.log(`Time to sell the ${car}!`)
                }
                break;
              case 'Refuel':
                let fuelAmount = Number(firstParam);
                if((obj[car].fuel+fuelAmount) > 75){
                   fuelAmount = 75 - obj[car].fuel;
                }
                 obj[car].fuel += fuelAmount;
                console.log(`${car} refueled with ${fuelAmount} liters`)
                break;
              case 'Revert':
                const km = Number(firstParam);
                obj[car].mileage -= km;
                if(obj[car].mileage < 10000){
                   obj[car].mileage = 10000; 
                } else {
                console.log(`${car} mileage decreased by ${km} kilometers`)
                }
                break;
                default:
                console.log('No such command!');
                continue;
            }
    }
    
    let arrOfObject = Object.entries(obj);
    
    arrOfObject.forEach(([car, obj]) =>{
       console.log(`${car} -> Mileage: ${obj.mileage} kms, Fuel in the tank: ${obj.fuel} lt.`) 
    })
    
    
    }
    solve([
      '3',
      'Audi A6|38000|62',
      'Mercedes CLS|11000|35',
      'Volkswagen Passat CC|45678|5',
      'Drive : Audi A6 : 543 : 47',
      'Drive : Mercedes CLS : 94 : 11',
      'Drive : Volkswagen Passat CC : 69 : 8',
      'Refuel : Audi A6 : 50',
      'Revert : Mercedes CLS : 500',
      'Revert : Audi A6 : 30000',
      'Stop'])
    
    console.log('------------------ Test 2 ------------------');
    solve([
      '4',
      'Lamborghini Veneno|11111|74',
      'Bugatti Veyron|12345|67',
      'Koenigsegg CCXR|67890|12',
      'Aston Martin Valkryie|99900|50',
      'Drive : Koenigsegg CCXR : 382 : 82',
      'Drive : Aston Martin Valkryie : 99 : 23',
      'Drive : Aston Martin Valkryie : 2 : 1',
      'Refuel : Lamborghini Veneno : 40',
      'Revert : Bugatti Veyron : 2000',
      'Stop'])
    