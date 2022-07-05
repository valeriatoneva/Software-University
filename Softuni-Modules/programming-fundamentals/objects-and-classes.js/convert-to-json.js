function toJson(key1, key2, key3){
    let obj = {
        name: key1,
        lastName: key2,
        hairColor: key3
    };
    
    let res = JSON.stringify(obj)
    console.log(res)
    
    }