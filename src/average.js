const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;

let add = 0
let count = 0

NonNegativeInteger = 1

console.log()
while (NonNegativeInteger >= 0 || count <= 1) {
    NonNegativeInteger = Number(readlineSync.question("Non-negative integer: "));
    count = count + 1
  if (NonNegativeInteger >= 0 && NonNegativeInteger <= Number.MAX_SAFE_INTEGER) {
      add = add + NonNegativeInteger;
  } else if (count > 1 && NonNegativeInteger < 0) {
      let answer = add / (count - 1)
      console.log("\n" + Intl.NumberFormat("en", { style: 'decimal', maximumFractionDigits:3, minimumFractionDigits:3 }).format(answer) + ".\n")
  } else {
    --count;
  }
}

//DONE
