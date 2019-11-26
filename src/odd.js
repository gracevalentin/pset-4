const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

var PositiveInteger = readlineSync.question("\nPositive integer: ")
var Sum = 0

while (PositiveInteger < MIN || PositiveInteger > MAX || PositiveInteger % 1 != 0) {
   PositiveInteger = readlineSync.question("Positive integer: ")
}
var PositiveInteger2 = PositiveInteger;
var digit = 0;
while (PositiveInteger2 > 1) {
  PositiveInteger2 /= 10;
  digit++
}
for (var i = 0; i < digit; i++) {
  let Value = (PositiveInteger % 10)
  PositiveInteger = Math.floor(PositiveInteger/10)

  if (Value % 2 === 1) {
    Sum = Sum + Value;
  }
}


console.log("\n" + Sum + ".\n");

//done
