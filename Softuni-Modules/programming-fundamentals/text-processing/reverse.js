function solve (input){
    let lOfBoth = input.length/2; 
    let firstWord = input.slice(0, lOfBoth);
    let secondWord = input.slice(lOfBoth, input.length); 
    let firstReverse = firstWord.split("").reverse().join("");
    let secondReverse = secondWord.split("").reverse().join("");
    console.log(firstReverse);
    console.log(secondReverse)
    }
    solve(`tluciffiDsIsihTgnizamAoSsIsihT`)