function solve (string, word){
    let count = 0;
    let split = string.split(" "); 
    
    for(let el of split){
    if(el === word){
        count++
    }
    }
    
    console.log(count)
    }
    solve('This is a word and it also is a sentence', 'is')