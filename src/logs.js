// Pino and pino-tee libraries are required for this.

// RUN: "node ./logs.js | pino-tee error ./errors > ./general"

const logger = require("pino")();

let users = [];

function createUser(ID) {
  if (ID > 20) {
    let user = {};
    user.userid = ID;
    user.name = Math.random().toString(36).substring(7);

    users.push(user);
    const userMonitor = logger.child(user);
    userMonitor.info("NEW USER");
  } else {
    logger.error("USER ERROR", { _id: ID });
  }
}

for (let i = 0; i < 1000; i++) {
  createUser(i);
}
