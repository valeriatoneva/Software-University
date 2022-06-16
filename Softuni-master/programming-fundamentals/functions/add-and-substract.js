function main(first, second, third){
    
    let sum = (first, second) =>{ // 23, 6
    return first + second;  // 23+6 = 29
}

    let subtract = (sumFirstAndSecond, third) =>{ // 29, 10
    return sumFirstAndSecond - third; // 19
}

let sumFirstAndSecond = sum(first, second); //saves the res of the function 
let finalResult = subtract(sumFirstAndSecond, third); //saves the res of the function 

console.log(finalResult);
}
main(23, 6, 10);