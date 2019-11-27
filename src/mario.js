const readlineSync = require("readline-sync");

const MIN = 1
const MAX = 24

console.log()

height = 0;

while (height < MIN || height > MAX || Number.isNaN(height)) {
  height = Number(readlineSync.question("Height: "));
}

let halfpyramid = "";

console.log();

for (let i = 0; i < height; i++) {
  for (let j = 0; j < height - 1 - i; j++) {
    halfpyramid += " ";
  }
  for (let k = 0; k < i + 2; k++) {
      halfpyramid += "#";
  }
  halfpyramid += "\n";
}
console.log(halfpyramid);
