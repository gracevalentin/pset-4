const readlineSync = require("readline-sync");

console.log()

const MIN = 0
const MAX = Number.MAX_SAFE_INTEGER

NonNegativeInteger = -1
check = 0

while (NonNegativeInteger < 0 || NonNegativeInteger > Number.MAX_SAFE_INTEGER) {
      NonNegativeInteger = Number(readlineSync.question("Non-negative integer: "));
}

for (i = 2; i <= Math.sqrt(NonNegativeInteger); i++) {
  if ((NonNegativeInteger / i % 1 == 0 && check == 0)) {
    console.log("\nNot Prime.\n")
    ++check
  }
}

if (check == 0) {
  console.log("\nPrime.\n")
}

//done
