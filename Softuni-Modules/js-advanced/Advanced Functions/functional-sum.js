function add(num1){
let sum = 0;

function inner(num2){ // recursion that calls itself 
    sum+= num2
    return inner;
}

inner.toString = ()=>{ // making the fucntion toa string g
    return sum;
}

return inner(num1); 

}
console.log(add(1)(6)(-3).toString())