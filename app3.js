const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req)
  if (req.url === "/") {
    res.end("Hello world");
  } else if (req.url === "/about") {
    res.end("Short History");
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p> We cannot find page</p>
    <a href="/">back home</a>
    `);
  }
});

server.listen(5001);
