function solve(command) {
  let numbers = [];
  let currNum = 1;

  for (let i = 0; i < command.length; i++) {
    let action = command[i];
    if (action === `add`) {
      numbers.push(currNum);
    } else if (action === `remove`) {
      numbers.pop();
    }
    currNum++;
  }

  if (numbers.length == 0) {
    console.log(`Empty`);
  } else {
    for (num of numbers) {
      console.log(num);
    }
  }
}
solve(["add", "add", "add", "add"]);
