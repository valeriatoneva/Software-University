function solve (array){

        let maxSequance = [];
        let arrayL = array.length;
        
        for(let i= 0; i < arrayL; i++){ // 2
        let currentSequence = [];
    
        for(let j = i; j < arrayL; j++){ // 2,1
    
            if(array[i] == array[j]){ // 2 == 1
            currentSequence.push(array[i])
            } else {
                break;
            }
        }
    
         if(currentSequence.length > maxSequance.length){
             maxSequance = currentSequence;
         }
        }
        console.log(maxSequance.join(` `))
        }
        
    solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])