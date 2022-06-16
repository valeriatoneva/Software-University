function solve (product, quantity){
    
    let coffePr = 1.50;
    let waterPr = 1.00
    let cokePr = 1.40;
    let snacksPr = 2.00;
    let sum = 0;
    
    switch (product) {
        case `coffee`: sum = coffePr*quantity; break;
        case `water`: sum = waterPr*quantity; break;
        case `coke`: sum = cokePr*quantity; break;
        case `snacks`: sum = snacksPr*quantity; break;
    }
    console.log(sum.toFixed(2))
    }
    solve("water", 5)