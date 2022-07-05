function solve (input){

    // let object = {
    //     productName: productName,
    //     productPrice: productPrice,
    // }
    
    let catalogue = [];
    
    for (let i=0; i < input.length; i++){
    let elements = input[i].split(" : ");
    let productName = elements[0];
    let productPrice = elements[1];
    let product = {
    name: productName,
    price: Number(productPrice)
    }
    catalogue.push(product)
    }
    
    let sorted = catalogue.sort((a,b)=>a.name.localeCompare(b.name));
    
    let currLetter = "";
    for(let el of sorted){
        if (el.name.charAt(0).toUpperCase() === currLetter){
            console.log(`${el.name}: ${el.price}`)
        }else {
            currLetter = el.name.charAt(0).toUpperCase();
            console.log(currLetter);
            console.log(`${el.name}: ${el.price}`)
    }
    
    
    }
    }