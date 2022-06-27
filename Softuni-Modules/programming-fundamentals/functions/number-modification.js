// function main(number) {
//     let num = number.toString();
//     let sum = 0;
  
//     const append = n => (num += n);
  
//     while (sum / num.length <= 5) {
  
//       for (let i = 0; i < num.length; i++) {
//         let n = Number(num[i]);
//         sum += n;
//       }
  
//       if (sum / num.length <= 5) {
//         append(9);
//         sum = 0;
//       }
//     }
    
//     console.log(num);
//   }
// main(101);

function numberModification(input) {
    while (getAverage(input) < 5) {
        input += '9';
    }
    console.log(input);


    function getSum(number) {
        let numToString = number.toString();
        let sum = 0;
        for (let i = 0; i < numToString.length; i++) {      
            sum += Number(numToString[i]);
        }
        return sum;  // gives sum 
    }

    function getAverage(num) {
        return getSum(num) / num.toString().length;
    }

    let mySum =  getSum(number);
    console.log(mySum)

}

numberModification(101)