function solve(input) {

    let myMap = new Map();
    let power = {
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14,
    }
    
    let type = {
        "S":4,
        "H":2,
        "D":2,
        "C":1, 
    }
    
    for(let el of input){
        let [personName, pt] = el.split(": ");
        let splitPt = pt.split(", ");
        if(!myMap.has(personName)){
            myMap.set(personName, new Set());
        }
        for(let el of splitPt){
            myMap.get(personName).add(el) // vzemi seta, koito stoi zad imeto na choveka i dobavi segashniq el 
        }
    }
    
    for(let [key, value] of myMap){
        let sum = 0;
        for(let card of value){
            let splitted = card.split("");
            let cardType = splitted.pop();
            let cardPower = splitted.join("")
            let powerAsNum = power[cardPower]
            let typeAsNum = type[cardType]
            sum += typeAsNum*powerAsNum;
        }
        console.log(`${key}: ${sum}`)
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