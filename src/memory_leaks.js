const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

// Warning with the global variables.
let leak = "";

app.get("/", (req, res) => {
  reading();
  res.send("document OK");
  console.log(leak.length);
});

function reading() {
  fs.readFile("file.txt", (err, data) => {
    leak += data;
  });
}

app.listen(port);
