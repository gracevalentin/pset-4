const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

let LowerBound = Number(readlineSync.question("\nLower Bound: "));
let UpperBound = Number(readlineSync.question("\nUpper Bound: "));

//needs to add all even numbers between upper and lower bound; if the lower bound is larger than the upper bound it has to ask again until it gets a valid input
