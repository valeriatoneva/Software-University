function perfectNum (number){

    let sumOfDevisibles = 1; 
    
       for(let i=2; i<number ;i++){ 
           
             if(number % i === 0){ 
                 sumOfDevisibles += i; // 6 
           }
      }      
            if(sumOfDevisibles === number && sumOfDevisibles !== 0){
           console.log("We have a perfect number!");
            } else {
           console.log("It's not so perfect.");
            }   
               
        
       
    }
    main(6)