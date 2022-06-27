function factorial(numOne, numTwo){

    //base case
    if((numOne == 0 && numTwo == 0) || (numOne == 1 && numTwo == 1)){
        return 1;
    //recursive case
    }else{
        return numOne * factorial(numOne-1);
        return numTwo * factorial(numTwo-1);
    }

answer = factorial(numOne, numTwo)

console.log("The factorial of " + numOne + " is " + answer);
console.log("The factorial of " + numTwp + " is " + answer);
}
factorial(5, 2)