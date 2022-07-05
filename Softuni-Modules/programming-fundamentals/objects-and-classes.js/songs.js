function songNames(input) {
    let numberOfSongs = input.shift();
    let lastElement = input.pop()
    
        class Song{
            constructor (typeList, name, time){
                this.typeList = typeList;
                this.name = name;
                this.time = time;
            }
            
            method (){
                console.log(`${name}`)
            }
    }
    
    let songs = [];
    
    for(let i=0; i < numberOfSongs; i++){
       let allSongs = input[i];
       let splitArray = allSongs.split("_")
       let typeList = splitArray[0];
       let name = splitArray[1];
       let time = splitArray[2];
       let song = new Song(typeList, name, time); // prisvoqvat se paramtrite
       songs.push(song)
    }
    
    
    if(lastElement === `all`){
        songs.forEach((item) => console.log(item.name)); 
    } else {
        let filtered = songs.filter((item) => item.typeList === lastElement);
        filtered.forEach((item) => console.log(item.name))
    }
    
    }