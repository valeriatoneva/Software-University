function solve(data) {
  let phoneBook = {};

  for (let line of data) {
    let split = line.split(" ");
    let name = split[0];
    let number = split[1];
    phoneBook[name] = number;
  }

  for (let key in phoneBook) {
    console.log(`${key} -> ${phoneBook[key]}`);
  }
}
solve([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
