// 70/100
class SummerCamp{
    constructor(organizer, location){
    this.organizer = organizer;
    this.location = location;
    this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500}; // condition
    this.listOfParticipants = []
    }

    registerParticipant (name, condition, money){
     if(!this.priceForTheCamp[condition]){
        throw new Error ("Unsuccessful registration at the camp.")
     }
     
        if(this.listOfParticipants.some(x => x.name == name)){
            return `The ${name} is already registered at the camp`
        }
     

     if(money < this.priceForTheCamp[condition]){ // gives me the value 
        return `The money is not enough to pay the stay at the camp.`
     } else {
        let participant = {name, condition, power: 100, wins: 0};
        this.listOfParticipants.push(participant)
        return `The ${name} was successfully registered.`
     }
     
    }

    unregisterParticipant (name){
        if(!this.listOfParticipants.some(x => x.name == name)){
            throw new Error (`The ${name} is not registered in the camp.`)
        } 
        this.listOfParticipants = this.listOfParticipants.filter(x => x.name != name)
        return `The ${name} removed successfully.`;
  }

    timeToPlay (typeOfGame, participant1, participant2){
    let player1 = this.listOfParticipants.find(x => x.name == participant1);
    let player2 = null;
    switch(typeOfGame){
        case 'WaterBalloonFights': 
        player2 = this.listOfParticipants.find(x => x.name == participant2);
        if(!player2){
            throw new Error(`Invalid entered name/s.`)
        }
        
        if(player1.condition !== player2.condition){
            throw new Error(`Choose players with equal condition.`)
        }
        
        if(player1.power > player2.power){
            player1.power += 1;
            return `The ${player1.name} is winner in the game ${typeOfGame}.`
        } else if(player1.power < player2.power){
            player2.power += 1;
            return `The ${player2.name} is winner in the game ${typeOfGame}.`
        }else {
            return 'There is no winner.'
        }
        
        break;
        case 'Battleship': 
        if(!player1){
            throw new Error(`Invalid entered name/s.`)
        }
        player1.power += 20;
        return `The ${participant1} successfully completed the game ${typeOfGame}.`
        break;
    }

    if(!this.listOfParticipants.some(x => x.participant1 == participant1) || !this.listOfParticipants.some(x => x.participant2 == participant2)){
        throw new Error(`Invalid entered name/s.`)
    }

    if(participant2 !== undefined){
        this.priceForTheCamp[condition].participant1
    }
  }
  
    toString (){
        console.log(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`)

        this.listOfParticipants
        .sort((a,b) => b.wins - a.wins)
        .forEach(x => {
         console.log(`${x.name} - ${x.condition} - ${x.power} - ${x.wins}`)
        })
    }

}
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300))
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov")); 
console.log(summerCamp.toString())