const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;
let NonNegativeInteger = -1
console.log ()
do {
  let NonNegativeInteger = Number(readlineSync.question("Non-negative integer: "));
} while (NonNegativeInteger > MIN || NonNegativeInteger < MAX);

if (NonNegativeInteger % 1==0 || NonNegativeInteger % NonNegativeInteger==0){
  console.log("\nPrime.\n")
} else (NonNegativeInteger % 1==!0 || NonNegativeInteger % NonNegativeInteger==!0);{
  console.log("\nNot prime.\n")
}
