function solve(input) {
  let myMap = new Map();

  for (let index = 0; index < input.length; index++) {
    let source = input[index]; // gold
    index++;
    let quantity = input[index]; // 155
    if (myMap.has(source)) {
      let oldValue = myMap.get(source); // the value of it
      myMap.set(source, Number(oldValue) + Number(quantity));
    } else {
      myMap.set(source, quantity);
    }
  }

  let mapToArr = Array.from(myMap);

  for (let el of mapToArr) {
    console.log(`${el[0]} -> ${el[1]}`);
  }
}
solve(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
