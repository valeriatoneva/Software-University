function solve (input){;
    let text = input.join(" ");
    let furnitureArr = [];
    let totalSum = 0; 
    let regex = /[>]{2}(?<furniture>[A-Z][A-z]+)[<]{2}(?<price>[\d.]+)!(?<quantity>\d+)/g;
    let valid;
    
    
    while((valid = regex.exec(text)) !== null){
    let validName = valid.groups[`furnitute`]; 
    let validPrice = valid.groups[`price`];
    let validQuantity = valid.groups[`quantity`];
    
    furnitureArr.push(validName);
    console.log(validName)
    totalSum += Number(validPrice) * validQuantity;
    }
    
    console.log(`Bought furniture:`)
    // for(let el of furnitureArr){
    //     console.log(el)
    // }
    console.log(`Total money spend: ${totalSum.toFixed(2)}`)
    
    
    }
    solve(['>>Sofa<<312.23!3',
    
    '>>TV<<300!5',
    
    '>Invalid<<!5',
    
    'Purchase'])
    
