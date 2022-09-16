function solve(arr) {
  let numConvert = arr.map(Number);
  let first = numConvert.shift();
  let last = numConvert.pop();
  console.log(first + last);
}
solve(["20", "30", "40"]);
