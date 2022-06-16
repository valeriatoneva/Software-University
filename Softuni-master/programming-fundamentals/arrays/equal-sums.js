function solve (array){

let foundIndex = `no`;
let arrayL = array.length;

for(let i = 0; i < arrayL; i++){ // i = 1

    let leftSum = 0;
    let rightSum = 0;

    for(let j = 0; j < i; j++){ // this cycle is done once until the array length
      leftSum += array[j]; // 
    }

    for(let r = i+1 ; r < arrayL; r++){
        rightSum += array[r]; 
      }

  if (leftSum === rightSum){
      foundIndex = i;
  }
}
console.log(foundIndex)
}
solve([1, 2, 3, 3])