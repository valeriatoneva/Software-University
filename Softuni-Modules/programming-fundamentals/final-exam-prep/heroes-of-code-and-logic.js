function solve(input){
    let n = Number(input.shift());
    let obj = {}
    let sum = 0;
    let currHp= 0;
    let currMp = 0;
    
    for(let i = 0; i< n; i++) {
       let [heroName, hp, mp] = input[i].split(" ");
       hp = Number(hp)
       mp = Number(mp)
       obj[heroName] = {[`hp`]: hp, [`mp`]: mp}
    }
    
    for(let i = n; i < input.length; i++){
        let [command, hero, number, lastParam] = input[i].split(" - ");
        if(command === "End"){
            break;
        }
        switch(command){
            case `CastSpell`:
            let mpNeeded = Number(number);
            let spellName = lastParam;
            if(obj[hero].mp >= mpNeeded){
                currMp = (obj[hero].mp - mpNeeded); 
                obj[hero][`mp`] = currMp;
                console.log(`${hero} has successfully cast ${spellName} and now has ${currMp} MP!`)
            } else {
                console.log(`${hero} does not have enough MP to cast ${spellName}!`)
            }
            break;
            case `TakeDamage`: 
            let damage = Number(number);
            let attacker = lastParam;
            currHp = (obj[hero].hp - damage);
            obj[hero][`hp`] = currHp;
            if(currHp > 0){
                console.log(`${hero} was hit for ${damage} HP by ${attacker} and now has ${currHp} HP left!`)
            } else {
                console.log(`${hero} has been killed by ${attacker}!`)
            }
            break;
            case `Recharge`:
            let amount = Number(number);
            currMp = (obj[hero].mp + amount);
            obj[hero][`mp`] = currMp;
            let maxMp = 200;
            if(currMp > maxMp){
                currMp = maxMp;
            }
            console.log(`${hero} recharged for ${amount} MP!`)
            break;
            case `Heal`: 
            let healthRecovered = Number(number);
            
            if(obj.hasOwnProperty(hero)){
            let oldHp = obj[hero].hp;
            obj[hero][`hp`] = oldHp + healthRecovered;
            
            if(obj[hero][`hp`] > 100){
              obj[hero][`hp`] = 100;
              let rechargedHealth = oldHp - healthRecovered;
              console.log(`${hero} healed for ${rechargedHealth} HP!`)
            } else {
                   console.log(`${hero} healed for ${healthRecovered} HP!`);
            }
            }
            break;
        }
    
    }
    for(let [key, value] of Object.entries(obj)){
        let name = key;
        console.log(name)
        for(let el of Object.entries(value)){
            let numbers = el[0][1]; 
            console.log(`HP: ${numbers}`)
        }
    }
    
    
    }
    solve(["2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"])