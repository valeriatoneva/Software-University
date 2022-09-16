function solve(arr) {
  let isEven = false;
  let evenNums = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      isEven = true;
      evenNums.push(arr[i]);
    } else {
      isEven = false;
    }
  }
  console.log(evenNums.join(" "));
}
solve(["20", "30", "40", "50", "60"]);
