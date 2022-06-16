function solve (firstNum, secondNum, operator){
    
    let sum = 0;
    
    switch (operator) {
        case `multiply`: sum = firstNum*secondNum; break;
        case `divide`: sum = firstNum/secondNum; break;
        case `add`: sum = firstNum+secondNum; break;
        case `subtract`: sum = firstNum-secondNum; break;
    }
    
    console.log(sum)
    }
    solve(5, 5, 'multiply')