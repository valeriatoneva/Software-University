function carWash(commands){
    
    let value = 0;
    let soap = x => x + 10;
    let water = x => x + x * 0.2;
    let vacuum = x => x + x * 0.25;
    let mud = x => x - x * 0.10; 
  
      for(i = 0; i < commands.length; i++){
          let currEl = commands[i];
  
      
      if(currEl === `soap`){
         value = soap(value);
      } else if (currEl === `water`){
          value = water(value);
      } else if (currEl === `vacuum cleaner`){
          value = vacuum(value);
      } else {
          value = mud(value);
      }
   }
   console.log(`The car is ${value.toFixed(2)}% clean.`)
  }
  
  carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])