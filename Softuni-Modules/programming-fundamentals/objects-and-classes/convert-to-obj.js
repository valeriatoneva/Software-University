function jasonToObj (objAsString){
    let obj = JSON.parse(objAsString);
    for(let key of Object.keys(obj)){
        console.log(`${key}: ${obj[key]}`)
    }
    }