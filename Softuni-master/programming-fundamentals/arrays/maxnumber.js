function solve (numbers){

    let array = []
    let topIntegers = 0; 
    let firstNum = 0;
    let secondNum = 0;
    let saveValue = ` `; 
    
    for(index = 0; index < numbers.length; index++){
        
        firstNum = numbers[index]; // 14
        index++;
        secondNum = number[index]; // 24
        
        if(firstNum > secondNum){ // 14 > 24 
             topIntegers += String(firstNum) + ` `
            break;
        } 
        
        
    }
    console.log(topIntegers)
    }
    solve([14, 24, 3, 19, 15, 17])