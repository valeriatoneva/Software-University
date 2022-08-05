function solve(input){
    let concealedMessage = input.shift();
    
    for(let el of input){
        let [command, firstParam, lastParam] = el.split(":|:");
        if(command === `Reveal`){break;}
        
        switch(command){
            case `InsertSpace`: 
            let index = Number(firstParam);
            let value = " ";
            concealedMessage = concealedMessage.split("")
            concealedMessage.splice(index, 0, value)
            concealedMessage = concealedMessage.join("")
            console.log(concealedMessage)
            break;
            case `Reverse`: 
            let oldString = firstParam;//!gnil
            if(concealedMessage.includes(oldString)){
              let substr = oldString.split("");
              let reversed = substr.reverse();
              reversed = substr.join("");
              concealedMessage = concealedMessage.replace(oldString, reversed)
              console.log(concealedMessage)
            } else {
                console.log(`error`)
            }
            
            break;
            case `ChangeAll`: 
            let substr2 = firstParam;
            let replacement = lastParam;
             concealedMessage = concealedMessage.split(substr2);
             concealedMessage = concealedMessage.join(replacement);
             console.log(concealedMessage)
            break;
        }
    
    }
    console.log(`You have a new text message: ${concealedMessage}`)
    }
    console.log(`-------------TEST 1-------------`)
    solve([
      'heVVodar!gniV',
      'ChangeAll:|:V:|:l',
      'Reverse:|:!gnil',
      'InsertSpace:|:5',
      'Reveal'])
     console.log(`-------------TEST 2-------------`)
     solve([
      'Hiware?uiy',
      'ChangeAll:|:i:|:o',
      'Reverse:|:?uoy',
      'Reverse:|:jd',
      'InsertSpace:|:3',
      'InsertSpace:|:7',
      'Reveal'
    ]
    )