function solve (input){
    let result = input.replace( /([A-Z])/g, " $1" );
    let split = result.split(" ")
    split.join(", ")
    split.shift();
    console.log(split.join(", "))
    }
    solve('SplitMeIfYouCanHaHaYouCantOrYouCan')