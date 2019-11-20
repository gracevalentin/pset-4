const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 78;

console.log ()
do {
  let PositiveInteger = Number(readlineSync.question("Positive integer: "));
} while (PositiveInteger > MIN || PositiveInteger < MAX);

if (NonNegativeInteger % 1==0 || NonNegativeInteger % NonNegativeInteger==0){
  console.log("\nPrime.\n")
} else (NonNegativeInteger % 1==!0 || NonNegativeInteger % NonNegativeInteger==!0);{
  console.log("\nNot prime.\n")
}
