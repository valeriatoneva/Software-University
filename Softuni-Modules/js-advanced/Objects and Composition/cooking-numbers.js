function solve(x, operation) {
  let initial = Number(operation.shift());
  let parser = {
    chop: (x) => x / 2,
    dice: (x) => Math.sqrt(x),
    spice: (x) => x + 1,
    bake: (x) => x * 3,
    fillet: (x) => x * 0.8,
  };

  for (let command of operation) {
    let funcToExecute = parser[command];
    initial = funcToExecute(initial);
    console.log(initial);
  }
}
solve("32", "chop", "chop", "chop", "chop", "chop");
