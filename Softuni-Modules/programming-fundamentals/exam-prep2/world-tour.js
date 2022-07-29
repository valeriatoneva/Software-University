function solve(input) {
  let newArr = input.shift();
  let stops = newArr.split("");
  let initialString = "";

  for (let command of input) {
    if (command === "Travel") {
      break;
    }
    let [action, firstParam, lastParam] = command.split(":");
    switch (action) {
      case `Add Stop`:
        if (stops[Number(firstParam)] !== undefined) {
          stops.splice(firstParam, 0, lastParam);
        }
        initialString = stops.join("");
        break;
      case `Remove Stop`:
        if (
          stops[Number(firstParam)] !== undefined &&
          stops[Number(lastParam)] !== undefined
        ) {
          let startIndex = Number(firstParam);
          let endIndex = Number(lastParam);
          removed = initialString.substring(startIndex, endIndex + 1);
          initialString = initialString.replace(removed, "");
        }
        break;
      case `Switch`:
        let pattern = new RegExp(firstParam, `g`);
        initialString = initialString.replace(pattern, lastParam);
        break;
    }
    console.log(initialString);
  }
  console.log(`Ready for world tour! Planned stops: ${initialString}`);
}
solve([
  "Hawai::Cyprys-Greece",

  "Add Stop:7:Rome",

  "Remove Stop:11:16",

  "Switch:Hawai:Bulgaria",

  "Travel",
]);
