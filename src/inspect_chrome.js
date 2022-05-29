// Run this file with "node --inspect ./inspect_chrome"

const http = require("http");

let userEnabled;

function validateUser(_userStats) {
  if (_userStats) {
    console.log("user ok");
  } else {
    console.error("user not authenticated");
  }
}

http
  .createServer(function (req, res) {
    validateUser(userEnabled);
    res.write("web site");
    res.end();
  })
  .listen(3000);
