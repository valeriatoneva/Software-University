function demo (arr){

    let newArr = [];
    
    for(let i = 0; i < arr.length; i++){
        let currNum = Number(arr[i])
        
        if(Math.sign(currNum) == 1 || Math.sign(currNum) == 0){
            isPositive = true;
            newArr.push(currNum)
        } else {
            isPositive = false;
            newArr.unshift(currNum)
            
        }
    }
    
        console.log(newArr.join(`\n`))

    
       
    
}
demo(8,9,-10,0)