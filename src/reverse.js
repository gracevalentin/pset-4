const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

do {
  let PositiveInteger = Number(readlineSync.question("\nPostive integer: "));
} while (amount > MIN || amount < MAX);

//let foundAt = orig.lastIndexOf();
let LastInteger = (PositiveInteger).last().prev(-1);
let SecondToLastInteger = (PositiveInteger).last().prev(-2);
let ThirdToLastInteger = (PositiveInteger).last().prev(-3);
let FourthToLastInteger = (PositiveInteger).last().prev(-4);
let FifthToLastInteger = (PositiveInteger).last().prev(-5);
let SixthToLastInteger = (PositiveInteger).last().prev(-6);
let SeventhToLastInteger = (PositiveInteger).last().prev(-7);
let EighthToLastInteger = (PositiveInteger).last().prev(-8);
let NinthToLastInteger = (PositiveInteger).last().prev(-9);
let TenthToLastInteger = (PositiveInteger).last().prev(-10);

console.log("")
//NOT DONE
