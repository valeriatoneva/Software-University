function solve (dungeonsRooms){

    let dungeon = dungeonsRooms[0].split(`|`);
    let initialHealth = 100;
    let initialCoins = 0; 
    let roomCount = 0;
    
    
    
    
    for (let i = 0; i < dungeon.length; i++){
        let currRoom = dungeon[i].split(" ")
    
        roomCount++
        console.log(currRoom[0])
    
        
        if(currRoom[0] === `potion` && intialHealth <= 100){
            intialHealth += Number(currRoom[1])
            console.log(`You healed for ${currRoom[1]} hp.`)
        } else if (currRoom[0] == `chest`) {
            intialCoins += Number(currRoom[1]);
            console.log(`You found ${initialCoins} coins.`)
        } else {
            initialHealth -= Number(currRoom[1])
        }
    
       if(initialHealth > 0 ){
           console.log(`You slayed ${currRoom[0]}.`)
           break;
       } else {
           console.log(`You died! Killed by ${currRoom[0]}.`)
           console.log(`Best room: ${roomCount}`)
       }
    }
    
    
    }
    solve([`rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000`])