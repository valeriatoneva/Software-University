function solve (word, string){
    let wordsToReveal = word.split(", ");
    let splitStr = string.split(" ");
    let result = "";
    // // let star = "";
    // // let starL = 0;
    // console.log(string)
    
    for(let el of wordsToReveal){ // great, learning
        for(let word of splitStr){
          if((word.charAt(0) === "*") && (el.length === word.length)){
          string = string.replace(word, el)
      }
    }
    } 
    console.log(string)
    }
    solve('great, learning',
    'softuni is ***** place for ******** new programming languages'
    )