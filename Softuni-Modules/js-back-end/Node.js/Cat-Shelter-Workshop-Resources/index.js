const http = require("http");

const homePage = require("./views/index"); // gives us the whole html page
const siteCss = require("./css/site.css");
const editCat = require('./views/editCat')

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });

  switch (req.url) {
    case "/":
      ifr
      res.write(homePage);
      break;
    case "css/site.css":
      res.writeHead(200, {
        "Content-Type": "text/css",
      });
      res.write(siteCss);
      break;
    default:
      res.write(`
            <h1>404</h1>
            `);
      break;
  }
  res.end();
});

server.listen(5000); // use ctr f5 to start the server, will return our html page
