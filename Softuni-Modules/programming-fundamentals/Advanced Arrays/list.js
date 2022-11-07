function demo (input){
    
    let sorted = input.sort();
    let numCount = 0;
    
    
    for(let i = 0; i < input.length; i++){
        let currEl = input[i];
        numCount++
        console.log(`${numCount}.${currEl}`)
    }
    
    
    }
    demo(['Potatoes', 'Tomatoes', 'Onions','Apples']) 