function main(charOne, charTwo){
    let startChar = Math.min(charOne.charCodeAt(0), charTwo.charCodeAt(0));
     let endChar = Math.max(charOne.charCodeAt(0), charTwo.charCodeAt(0));
     
     let charsInRangeArray = [];
     
     for(let curr = startChar+1; curr < endChar; curr++){
       let currentChar = String.fromCharCode(curr);
       charsInRangeArray.push(currentChar)
     }
    console.log(charsInRangeArray.join(` `))
}
main('a', 'd');