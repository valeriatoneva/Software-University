function solve(input) {
  let obj = {};

  for (let el of input) {
    let [town, product, price] = el.split(" | ");
    price = Number(price);

    if (obj.hasOwnProperty(product)) {
      let currPrice = obj[product]["price"];
      if (currPrice > price) {
        obj[product] = { town, price };
      }
    } else {
      obj[product] = { town, price };
    }
  }
  for (let [product, value] of Object.entries(obj)) {
    console.log(`${product} -> ${value.price} (${value.town})`);
  }
}
solve([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
