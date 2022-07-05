function solve (anObject){
    let keys = Object.keys(anObject);
    
    for(let key of keys){
        let value = anObject[key]
        console.log(`${key} -> ${value}`)
    }
        
        
    }