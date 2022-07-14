function solve (input){
    let players = new Map();
    let enumCardPower = {
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14
    };
    
    let enumCardType={
        "S": 4,
        "H": 3,
        "D": 2,
        "C": 1
    };
    
    for(let el of input){
      let [name, decks] = el.split(": ")
      let pt = decks.split(", ");
      let deckAsArr = [decks];
      if(!players.has(name)){
          players.set(name, new Set())
      }
      
      for(let card of deckAsArr){
          players.get(name).add(card);
      }
    }
    
    for(let [key, value] of players){
        let sum = 0;
        for(let card of value){
          let cardInfo = card.split("");
          let cardType = cardInfo.pop();
          let cardPower = cardInfo.join("");
          let 
          
        }
    }
    
    }
    solve([
    
    'Peter: 2C, 4H, 9H, AS, QS',
    
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    
    'Andrea: QH, QC, QS, QD',
    
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    
    'Andrea: QH, QC, JS, JD, JC',
    
    'Peter: JD, JD, JD, JD, JD, JD'
    
    ])