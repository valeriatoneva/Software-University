const router = require('express').Router();

const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');

app.get('/', homeController.getHomePage)
app.get('/about', homeController.getAboutPage)

router.post('/create', cubeController.getCreateCube);
router.post('/create', cubeController.postCreateCube);

module.exports = router; 