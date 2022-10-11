function calc(num){ // function that calls itself 
num--;

if(num === 0){
    return;
}

return calc; 
}

let res = calc(10);
console.log(res);