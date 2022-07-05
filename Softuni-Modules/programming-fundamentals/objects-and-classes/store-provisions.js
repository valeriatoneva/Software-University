function solve(currStock, productsForDel) {
    let storedProducts = {};
  
    for (let index = 0; index < currStock.length; index++) {
      let product = currStock[index];
      index++;
      storedProducts[product] = Number(currStock[index]);  // key = value
    }
  
    for (let index = 0; index < productsForDel.length; index++) {
      let product = productsForDel[index];
      index++;
  
      if (!storedProducts.hasOwnProperty(product)) {
          storedProducts[product] = 0;
      }
      storedProducts[product] += Number(productsForDel[index]);
    }
  
  for (let product in storedProducts) {
    console.log(`${product} -> ${storedProducts[product]}`);
  }
  
  }
  