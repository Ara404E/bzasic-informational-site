const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/about.html") {
    res.setHeader("Content-Type", "text/html");
    fs.readFile("../frontend/about.html", (error, data) => {
      if (error) {
        console.log(error);
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
  } else if (req.url === "/index.html" || req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    fs.readFile("../frontend/index.html", (error, data) => {
      if (error) {
        console.log(error);
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
  } else if (req.url === "/contact.html") {
    res.setHeader("Content-Type", "text/html");
    fs.readFile("../frontend/contact.html", (error, data) => {
      if (error) {
        console.log(error);
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    fs.readFile("../frontend/404.html", (error, data) => {
      if (error) {
        console.log(error);
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
  }
});

server.listen(3000, "localhost", () => {
  console.log("Listenning on port 3000");
});
