let num = 4;
let another = 3;

function add(n1, n2){
   return n1+n2; // 4+3
} // exist fucntion whenever executed, can use only 1 return in a block 

function miltiply(n1, n2){
    return n1*n2;
}

let sum = add(num, another); // 4,3 returns here and gives result, var holds its answer 
let product = multiply(5, sum) // n1= 5 , n2 = sum 
console.log(product)