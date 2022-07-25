function solve (input){
    let regex = /%(?<customer>[A-Z][a-z]+)%[^$%|.]*\<(?<product>\w+)\>[^$%|.0-9]*\|(?<count>\d+)\|[^$%|.0-9]*((?<price>\d+\.\d+)?)\$/g; 
    let totalSum = 0;
    
    let text = input.join("-");
    let current = regex.exec(text);
    
    while(current){
        let currPrice = current.groups.count*current.groups.price;
        console.log(`${current.groups.customer}: ${current.groups.product} - ${currPrice.toFixed(2)}`)
        totalSum += currPrice;
        current = regex.exec(text);
    }
    console.log(`Total income: ${totalSum.toFixed(2)}`);
    
    
    
    }
    solve(['%George%<Croissant>|2|10.3$',
    
    '%Peter%<Gum>|1|1.3$',
    
    '%Maria%<Cola>|1|2.4$',
    
    'end of shift'])