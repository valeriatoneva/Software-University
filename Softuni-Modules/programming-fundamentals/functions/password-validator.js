function password(pass) {
    // let boolean = false;
    let symbolMatches = 0;
    let letterMatches = 0;
    let isValid = 0;
    let passL = pass.length;
    
    let alphabetArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    let alphabetL = alphabetArr.length;
    let symbolArr = [1,2,3,4,5,6,7,8,9,0];
    let symbolL = symbolArr.length;
 
    if (passL < 6 || passL > 10) {
        console.log('Password must be between 6 and 10 characters')
    } else {
        isValid++
    }
 
    for (let i = 0; i < passL; i++) {
        let everyChar = pass[i];
        for (let a = 0; a < alphabetL; a++) {
            let everyLetter = alphabetArr[a];
            if (everyChar === everyLetter) {
                letterMatches++;
            }
 
        }
    }
 
    for (let i = 0; i < passL; i++) {
        let everyChar = Number (pass[i]);
        for (let s = 0; s < symbolL; s++) {
            let everySym = symbolArr[s];
            if (everyChar === everySym) {
                symbolMatches++;
            }
 
        }
    }
    if (letterMatches === passL) {
        isValid++;
    }
    else if (letterMatches !== passL) {
        console.log("Password must consist only of letters and digits");
    }
 
    if(symbolMatches < 2){
    	console.log("Password must have at least 2 digits")
    }else{
    	isValid++;
    }
 
 
    if(isValid === 3){
    	console.log("Password is valid")
    }
 
}