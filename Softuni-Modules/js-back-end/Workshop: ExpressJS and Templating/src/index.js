const express = require('express');

const router = require('./routes')
const config = require('./config');
const setupViewEngine = require('./config/viewEngine')


const app = express();
setupViewEngine(app)

app.use(express.static('src/public'));
app.use(express.urlencoded({extended: false}));
app.use(routes)


app.listen(congig.PORT, () => console.log(`Server is running on port ${config.PORT}`))