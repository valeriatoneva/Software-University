function solve(input){
    let originalArrSum = 0; 
    let newArraySum = 0;
    let inputL = input.length
    
    
    for(i=0; i < inputL; i++){
    let currentNum = Number(input[i]);
    originalArrSum += input[i];
    
       if(currentNum % 2 === 0) {
           input[i] += i 
       } else {
           input[i] -= i
       }
   newArraySum += input[i];
    }
    console.log(input)
    console.log(originalArrSum)
    console.log(newArraySum)
}
