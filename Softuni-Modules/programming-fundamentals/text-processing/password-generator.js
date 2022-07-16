function solve (arr){
let concatenation = "";
const vowels = ["a", "e", "i", "o", "u"]
let isVowel = false;
let concatenatedString = arr[0]+arr[1];
let thirdString = arr[2];
let foundVowels = [];
let elCount = 0;

  for(let letter of concatenatedString){ // letters of each word 
    if(vowels.includes(letter)){
      isVowel = true; // the letter is a vowel 
      foundVowels.push(letter);
    }
  }
  
  for(let el of thirdString){
    elCount++;
    if(elCount == 1){
      let firstOfConact = foundVowels[0];
      let firstOfThirdArr = thirdString.charAt(0);
      concatenatedString = concatenatedString.replace(firstOfConact, firstOfThirdArr)
    } else if(elCount == 2){
      concatenatedString = concatenatedString.replace(foundVowels[1], thirdString.charAt(1))
    }
  }

  console.log(concatenatedString)
}
solve([ 'ilovepizza', 'ihatevegetables', 'orange'])