function solve(data) {
  let storage = new Map();

  for (let el of data) {
    let [items, quantity] = el.split(" ");

    if (storage.has(items)) { // proverqva me dali ima tozi kluch 
      let oldQuantity = storage.get(items); // vrushta  value zad tozi produkt
      storage.set(items, oldQuantity + Number(quantity));
    } else {
      storage.set(items, Number(quantity));
    }
  }
  for (let el of storage.entries()) {
    console.log(`${el[0]} -> ${el[1]}`);
  }
}
solve(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
