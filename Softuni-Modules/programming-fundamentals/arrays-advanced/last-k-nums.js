function demo (n, k){
    
    let arr = [1];
    
    
    for(let i = 0; i < n - 1; i++){
         let sequenceK = arr.slice(-k);
         let sum = 0;
         for(let el of sequenceK) {
             sum += Number(el)
         }
         arr.push(sum)
    }
    console.log(arr.join(' '))
    
    
    
    
    }
    demo(6, 3)