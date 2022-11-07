function demo (arr){
    
    let k = arr.shift()
    
    
    let slicedFirstPart = arr.slice(0, k);
    let slicedLastPart = arr.slice(-k);
    
    
    
    console.log(slicedFirstPart.join(` `))
    console.log(slicedLastPart.join(` `))
    
    
    
    }
    demo([2, 7, 8, 9])
    demo([3, 6, 7, 8, 9])
    