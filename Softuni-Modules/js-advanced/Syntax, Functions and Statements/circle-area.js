function solve(n) {
  if (typeof n == "number") {
    let r = n;
    let a = Math.PI * r * r;
    console.log(a.toFixed(2));
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${typeof n}.`);
  }
}

solve(5);
