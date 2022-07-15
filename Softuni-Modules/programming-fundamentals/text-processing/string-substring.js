function solve (word, text){
    let textToLower = text.toLowerCase(); 
    
    if(textToLower.includes(word)){
        console.log(word)
    } else {
        console.log(`${word} not found!`)
    }
    
    
    
    }
    solve('javascript',
    'JavaScript is the best programming language'
    )