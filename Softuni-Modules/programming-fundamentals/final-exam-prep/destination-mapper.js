function solve(input) {
  let regex = /([=\/])([A-Z][A-Za-z]{2,})\1/g;
  let matched = input.match(regex);
  let sum = 0;
  let arr = [];
  let onlyLetters = /([A-Z][A-Za-z]+)/g;
  if (matched !== null) {
    for (let el of matched) {
      let location = el.match(onlyLetters);
      for (let loc of location) {
        sum += Number(loc.length);
        arr.push(loc);
      }
    }
  } else {
    sum = 0;
    arr = [];
  }

  let joined = arr.join(", ");
  console.log(`Destinations: ${joined}`);
  console.log(`Travel Points: ${sum}`);
}
solve("ThisIs some InvalidInput");
