const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

do {
  let PositiveInteger = Number(readlineSync.question("\nPostive integer: "));
} while (PositiveInteger > MIN || PositiveInteger < MAX);

//use the code from reverse.js to define and check each value
//if (Amount % 1 === 0) {
  //use this (odd)
//} else (Amount % 2 === 0){
  //have it disregard this (even)
//}


//add loop that checks for odd numbers and assigns them to a variable?
