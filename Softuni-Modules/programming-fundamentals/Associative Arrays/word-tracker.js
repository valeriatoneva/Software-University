function solve(data) {
  let myMap = new Map();

  let words = data.shift().split(" ");
  for (let el of words) {
    myMap.set(el, 0);
  }
  for (let el of data) {
    if (myMap.has(el)) {
      let oldValue = myMap.get(el);
      myMap.set(el, oldValue + 1);
    }
  }
  let sorted = Array.from(myMap.entries()).sort(
    ([keyA, valueA], [keyB, valueB]) => valueB - valueA
  );

  for (let el of sorted) {
    console.log(`${el[0]} - ${el[1]}`);
  }
}
solve([
  "this sentence",

  "In",
  "this",
  "sentence",
  "you",
  "have",

  "to",
  "count",
  "the",
  "occurrences",
  "of",

  "the",
  "words",
  "this",
  "and",
  "sentence",

  "because",
  "this",
  "is",
  "your",
  "task",
]);
