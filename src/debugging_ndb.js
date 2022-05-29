//Run this file with "nbd ./debugging_ndb"

let base = 0;

function iterate() {
  for (let a = 0; a < 5; a++) {
    base += 10;
  }
  console.log(base);
}

iterate();
