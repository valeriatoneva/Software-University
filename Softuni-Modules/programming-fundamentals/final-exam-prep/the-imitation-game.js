function solve(input) {
  let encryptedMessage = input.shift();

  for (let el of input) {
    if (el === `Decode`) {
      break;
    }
    let [command, firstParam, lastParam] = el.split("|");
    switch (command) {
      case `ChangeAll`:
        let substring = firstParam; // z
        let replacement = lastParam; // l
        encryptedMessage = encryptedMessage.split(substring);
        encryptedMessage = encryptedMessage.join(replacement);
        break;
      case `Insert`:
        let index = firstParam; // 2
        let value = lastParam; // o
        encryptedMessage = encryptedMessage.split("");
        encryptedMessage.splice(index, 0, value);
        encryptedMessage = encryptedMessage.join("");
        break;
      case `Move`:
        let numOfLetters = firstParam;
        let removed = encryptedMessage.substr(0, numOfLetters); // zzH
        encryptedMessage = encryptedMessage.replace(removed, "");
        encryptedMessage = encryptedMessage + removed;
        break;
    }
  }
  console.log(`The decrypted message is: ${encryptedMessage}`);
}
solve(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
