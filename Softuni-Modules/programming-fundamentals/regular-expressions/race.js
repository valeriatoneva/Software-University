function solve(input) {
  let namesReg = /[A-Za-z]/g;
  let distanceReg = /\d/g;
  let listOfNames = input.shift().split(", ");
  let myMap = new Map();
  let foundNames = [];
  let foundNums = [];

  listOfNames.forEach((person) => {
    myMap.set(person, 0);
  });

  for (let el of input) {
    if (el === "end of race") {
      break;
    }
    let name = el.match(namesReg).join("");
    let num = el.match(distanceReg).reduce((a, b) => {
      return Number(a) + Number(b);
    });

    if (myMap.has(name)) {
      let previousDistance = myMap.get(name);
      previousDistance += Number(num);
      myMap.set(name, previousDistance);
    }
  }
  let sortedNames = Array.from(myMap).sort((a, b) => {
    return b[1] - a[1];
  });

  console.log(`1st place: ${sortedNames[0][0]}`);
  console.log(`2nd place: ${sortedNames[1][0]}`);
  console.log(`3rd place: ${sortedNames[2][0]}`);
}
solve([
  "George, Peter, Bill, Tom",

  "G4e@55or%6g6!68e!!@ ",

  "R1@!3a$y4456@",

  "B5@i@#123ll",

  "G@e54o$r6ge#",

  "7P%et^#e5346r",

  "T$o553m&6",

  "end of race",
]);
