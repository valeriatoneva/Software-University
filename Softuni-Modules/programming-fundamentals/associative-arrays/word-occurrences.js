function solve(data) {
  let myMap = new Map();
  let wordCount = 0;

  for (let word of data) {
    if (!myMap.has(word)) {
      myMap.set(word, 0);
    }
    let valueOfWord = myMap.get(word);
    myMap.set(word, valueOfWord + 1);
  }

  let sorted = Array.from(myMap).sort((a, b) => b[1] - a[1]);
  for (let [word, words] of sorted) {
    console.log(`${word} -> ${words} times`);
  }
}
solve([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
