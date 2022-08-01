function solve(input){
    let n = input.shift();
    let obj = {};
    
    for(let i=0; i < n; i++){
      let [plant, rarity] = input[i].split(`<->`);
      if(!obj.hasOwnProperty(plant)){
           obj[plant] = Number(rarity); // old value inside obj[plant]
      } else {
          let newValue = Number(rarity);
          obj[plant] += Number(newValue);
     }
    }
    
    for(let k = n; k < input.length; k++){
       let [command, other] = input[k].split(": ");
       if(command === `Exhibition`){
            break;
       }
       let [firstParam, lastParam] = other.split(" - ")
    
    switch(command){
        case `Rate`: 
        let rating = Number(lastParam);
        if(obj.hasOwnProperty(plant)){
          obj[plant][rarity] = {}
        }
        break;
        case `Update`: break;
        case `Reset`: break;
    }
        console.log(obj)
    }
    
    }
    solve((["3",
    "Arnoldii<->4", // plant<->rarity 
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
    )