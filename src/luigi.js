const readlineSync = require("readline-sync");

const MIN = 1
const MAX = 24

height = 0;

console.log()

while (height < MIN || height > MAX || Number.isNaN(height) || !Number.isInteger(height)) {
  height = Number(readlineSync.question("Height: "));
}

let pyramid = "";
console.log();
for (let i = 0; i < height; i++) {
  for (let j = 0; j < height - 1 - i; j++) {
    pyramid += " ";
  }
  for (let k = 0; k < i + 2; k++) {
      pyramid += "#";
  }
  pyramid += "  ";
  for (let k = 0; k < i + 2; k++) {
      pyramid += "#";
  }
  pyramid += "\n";
}
console.log(pyramid);
