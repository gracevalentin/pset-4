const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

do {
  let PositiveInteger = Number(readlineSync.question("\nPostive integer: "));
} while (amount > MIN || amount < MAX);

//add loop that checks for odd numbers and assigns them to a variable?

//NOT DONE
