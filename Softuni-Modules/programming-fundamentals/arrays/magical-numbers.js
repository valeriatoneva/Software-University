function solve (array, num){

   let validPair = ``;
   let arrOfPairs = [];

    for(let index = 0; index < array.length; index++){

        for(let j = index + 1; j < array.length; j++){

          if(array[index]+array[j] === num){
              validPair = `${array[index]} ${array[j]}`
              arrOfPairs.push(validPair);
          }      
        }
    }
   console.log(arrOfPairs.join('\n'))
    }
    solve([1, 7, 6, 2, 19, 23],8)