function solve (string){
    
    let splitted = string.split("\\");
    let fileName = splitted.pop().split(".");
    let fileExt = fileName.pop();
    fileName = fileName.join(".")
    
    
    
    console.log(`File name: ${fileName}`)
    console.log(`File extension: ${fileExt}`)
    
    }
    solve('C:\\Internal\\training-internal\\Template.bak.pptx')