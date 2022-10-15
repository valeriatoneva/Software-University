// have to finish 
class VegetableStore{
    constucor(owner, location){
    this.owner = owner;
    this.location = location;
    this.availableProduct = []
    }

    loadingVegetables(vegetables){


    for(let el of vegetables){
       let [type, quantity, price] = el.split(" ");
       quantity = Number(quantity);
       price = Number(price);
       const targetProduct = this.availableProduct.find(x => x.type === type);
    //   this.books.find(el => el.bookName === bookName);

       if(!targetProduct){
        let vegetable = {type, quantity, price};
        this.availableProduct.push(vegetable);
       } else {
        let oldQuantoty = targetProduct.quantity;
        if (currentPrice < price) {
            targetProduct.price = price;
        }
        oldQuantoty += quantity;
       }
    }

    let output = "";
    for(let el of this.availableProduct){
        console.log(el)
    }
    }
}
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));

 