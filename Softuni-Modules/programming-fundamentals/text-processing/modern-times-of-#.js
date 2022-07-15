function solve (string){
    
    let splitStr = string.split(" ");
    
    for(let el of splitStr){
       if(el.charAt(0) === `#` && el.length > 1){
           let flag = true;
           let wordLower = el.toLowerCase();
       
           for(let i = 1; i < wordLower.length; i++){
               if(wordLower.charCodeAt(i) < 97 || wordLower.charCodeAt(i) > 122){
                   flag = false;
                   break
               }
        }
           if(flag){
               console.log(el.slice(1))
           }
        }
     }
     
    }