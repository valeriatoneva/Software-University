const fs = require('fs/promises')
const db = require('../db.json')
const path = require('path')

class Cube {
    constructor(name, description, imageUrl, difficultyLevel){
        this.name =  name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficultyLevel = difficultyLevel;
    }
    static save(cube){
     this.id = db.cubes.length + 1;
     db.cubes.push(cube); 
     const jsonData = JSON.stringify(db, null, 2)
     fs.writeFileSync(path.resolve(_dirname, '../db.json'), jsonData)
    }
}

module.exports = Cube;