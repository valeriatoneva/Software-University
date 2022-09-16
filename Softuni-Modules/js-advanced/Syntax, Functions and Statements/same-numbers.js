function solve(n) {
  let numAsStr = String(n);
  let firstDigit = numAsStr[0];
  let isTrue = false;
  let sum = 0;

  for (let index = 0; index < numAsStr.length; index++) {
    let currEl = numAsStr[index];
    if (firstDigit === currEl) {
      isTrue = true;
    } else {
      isTrue = false;
    }
    let num = Number(currEl);
    sum += num;
  }
  if (isTrue) {
    console.log(`true`);
  } else {
    console.log(`false`);
  }
  console.log(sum);
}
solve(2222222);
