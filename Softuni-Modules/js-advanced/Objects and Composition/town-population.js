function solve(info) {
  let obj = {};

  for (let el of info) {
    let [city, population] = el.split(" <-> ");
    population = Number(population);

    if (obj.hasOwnProperty(city)) {
      population += obj[city]; // gives the vale that stays behind city //
    }
    obj[city] = population; // else curr population stays the same
  }

  for (let city in obj) {
    console.log(`${city} : ${obj[city]}`);
  }
}
solve([
  "Istanbul <-> 100000",

  "Honk Kong <-> 2100004",

  "Jerusalem <-> 2352344",

  "Mexico City <-> 23401925",

  "Istanbul <-> 1000",
]);
