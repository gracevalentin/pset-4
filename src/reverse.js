const readlineSync = require("readline-Sync")

const MIN = 1
const MAX = Number.MAX_SAFE_INTEGER

let a = 0
let x = ""

console.log()

while (a < 1 || a > Number.MAX_SAFE_INTEGER || !Number.isInteger(a)) {
  a = Number(readlineSync.question("Positive integer: "));
}

while (a > 0) {
  let value = (a % 10)
  a = Math.floor(a/10)

  if (a > 0) {
    x = x + value + ", ";
  } else {
    x = x + value + ". ";
  }
}

console.log("\n"+x+"\n");

//done
