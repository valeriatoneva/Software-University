const Cube = require('../models/Cube')

exports.getCreateCube = (req, res) => { // the nav is the same 
    res.render('create') // create.hbs
};

exports.postCreateCube = (req, res) => {
    const {name, description, imageUrl, difficultyLevel } = req.body;
    let cube = new Cube(name, description, imageUrl, difficultyLevel)
    Cube.save(cube)
    res.redirect('/')
}

