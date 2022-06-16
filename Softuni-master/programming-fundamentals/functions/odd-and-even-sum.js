function main(num){
    
    let numToStr = String(num);
    let oddSum = 0;
    let evenSum = 0; 
    
    for(let char of numToStr){
        let currNum = Number(char);
        
        if(currNum % 2 == 0){
            evenSum += currNum;
        } else {
            oddSum += currNum;
        }
    }
     console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
    }
    main(1000435);