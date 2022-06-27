function solve(input) {
 
    let arr = [];
    let inputL = input.length;
    let initialLoot = input[0].split("|");
    
    
    
    
    
    
      for(i = 1; i < inputL; i++){
          let command = input[i];
    
          let separatedCommands = input[i].split(" ");
          console.log(separatedCommands[0])
    
    
    
         while(command !== "Yohoho!") {
    
          switch(separatedCommands[0]){
          case `Loot`: 
              for(let el of command[0])
            break;
        case `Drop`: 
            break;
        case `Steal`: break;
    
    
     unshift.intialLoot(separatedCommands[1])
    
                 
    
                 
    
             
         }
      }
      
    }
    solve((["Gold|Silver|Bronze|Medallion|Cup",
    
    "Loot Wood Gold Coins", // comand
    
    "Loot Silver Pistol",// comand
    
    "Drop 3",// comand
    
    "Steal 3",// comand
    
    "Yohoho!"])); // comand