import * as http from "http";

http
  .createServer((req, res) => {
    res.write("Hello World! Typescript");
    res.end();
  })
  .listen(3000);
