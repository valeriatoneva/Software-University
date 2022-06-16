function main(input){
    let inputL = input.length;
    
for (let i = 0; i < inputL; i++){
    currEl = input[i];
    
    if(inputL >= 2) {
        if(inputL >=6 && inputL <=10){
            if(currEl===String){
              console.log(`Password Is Valid`)
            }
        }
    }  
}

for (let i = 0; i < inputL; i++){
    currEl = Number(input[i]);
    
    if(inputL >= 2) {
        if(inputL >=6 && inputL <=10){
            if(currEl===Number)
              console.log(`Password Is Valid`)
            }
        }
    }  
}



}
main('MyPass123')