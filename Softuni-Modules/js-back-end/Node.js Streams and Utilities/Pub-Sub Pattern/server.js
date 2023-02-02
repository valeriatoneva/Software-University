const http = require("http"); // this file is a

const eventBus = require("./eventBus");

const server = http.createServer((req, res) => {
  console.log("to do...");
//   const loggetr = require("./logger");
//   const reporter = require("./reportingService");
  logger.log("Request: - " + req.url);
  eventBus.publish(`request`, {method: req.method, url: req.url});
  res.end();
  
});

server.listen(5000);
console.log("Server is running...");
