const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

let LowerBound = Number(readlineSync.question("\nLower bound: "));
let UpperBound = Number(readlineSync.question("Upper bound: "));

let Sum = 0

while (LowerBound > UpperBound) {
    LowerBound = readlineSync.question("Lower bound: ")
    UpperBound = readlineSync.question("Upper bound: ")
}
if (LowerBound % 2 == 0) {
    for (let i = LowerBound; i <= UpperBound; i += 2); {
      Sum = i + Sum
    }
console.log("\n" + Sum.toLocaleString("en") + ".\n")
} else {
    for( let i = LowerBound + 1; i <= UpperBound; i += 2) {
      Sum = i + Sum;
    }
} console.log("\n" + Sum.toLocaleString("en") + ".\n")

//done
