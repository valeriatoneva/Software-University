function demo (input){
    
    let ascending = input.sort((a, b) => a-b);
    
    let sliced = ascending.slice(0,2)
    
    console.log(sliced.join(" "))
    
    
    }
demo([30, 15, 50, 5]) // 5, 15, 30, 50
    