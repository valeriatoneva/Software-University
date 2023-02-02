const express = require('express');
const handleBars = require('express-handlebars');

const loggerMiddleware = require('./loggerMiddleware')
const app = express();

app.engine('handlebars', handleBars.engine())
app.set('view engine', 'handlebars')


app.use(express.static('public'))
app.use(loggerMiddleware) // use this middlware, middlware is a func that is executed before the action 

app.get("/", (req, res) => {
    res.render(`home`); // looking for the file home.handlebars, new way to do this 
  });

// app.get("/old", (req, res) => {
//   res.send(`
// <html>
// <head>
// <link rel="stylesheet" href="/css/style.css" />
// </head>
// <h1> Hello from Express! </h1>
// <a href="/cats">cats</a>
// </html>
// `);
// });

app.get("/cats", (req, res) => {
  // get method route
  res.send("<h1>Cats page </h1>"); // this request returns me this
});

app.get("/cats/1", (req, res) => {
    // get method route
    res.download("./cat.jpg");
  });

app.get("/cats/:catId", (req, res, next) => { // middleware, or action 1
  let catId = Number(req.params.catId);
  if(!catId){
    res.send('invalid catid')
  } else {
    next()
  }
  next() // calling the next action 
}, (req,res) => {
    console.log(req.params) // is an object , action 2
    // get method route
    res.send(`<h1>Individual cat page - catId=${req.params.catId}</h1>`); // this request returns me this
  });

  app.get("/json", (req, res) => {
    res.json(`<h1>Individual cat page - catId=${req.params.catId}</h1>`); // this request returns me this
  });


  app.get("/redirect", (req, res) => {
    // get method route
    res.redirect("/redirected");
  });


app.get("/dogs", (req, res) => {
  // get method route
  res.send("<h1>Dogs page </h1>");
});

app.post("/cats", (req, res) => {
  // endpoint
  res.send("cat received");
});

app.put("/cats", (req, res) => {
  // get method route
  res.send("cat is updated");
});

app.delete("/cats", (req, res) => {
  // get method route
  res.send("cat is deleted");
});


app.listen(5000, () => console.log("Server running"));
