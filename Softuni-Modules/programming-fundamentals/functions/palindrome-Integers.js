function main(input){
    
    for(const el of input){
        let currEl = String(el);
        let reversed = String(el).split(``).reverse().join(``); // reverse works only on an array, not a string
        
       if(currEl === reversed) {
           console.log(true)
       } else {
           console.log(false)
       }
    }
    
    
    }
    main([123,323,421,121]);