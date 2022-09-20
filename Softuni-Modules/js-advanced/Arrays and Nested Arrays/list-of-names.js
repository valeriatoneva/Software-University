function solve(arr) {
  let sorted = arr.sort((a, b) => a.localeCompare(b));
  sorted.forEach((el, i) => console.log(`${i + 1}.${el}`));
}
solve(["John", "Bob", "Christina", "Ema"]);
