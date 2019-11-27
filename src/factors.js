const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

var PositiveInteger = 0;
var loop = 1;
var string = "\n";

console.log()

while (PositiveInteger < MIN || PositiveInteger % 1 != 0 || PositiveInteger > MAX) {
  var PositiveInteger = Number(readlineSync.question("Positive integer: "));
}

if (Math.sqrt(PositiveInteger)%1 == 0) {
  var PositiveIntegerLoop = Math.sqrt(PositiveInteger) + 1
} else {
  var PositiveIntegerLoop = Math.sqrt(PositiveInteger)
}

while (loop < PositiveIntegerLoop) {
  if ((PositiveInteger/loop)%1 == 0) {
    if (PositiveInteger/loop == loop) {
      var string = string + String(loop);
      if (loop < Math.sqrt(PositiveInteger)-1) {
        var string = string + ", "
      } else {
        var string = string + "."
      }
    } else {
      var string = string + String(loop) + ", " + String(PositiveInteger/loop)
      if (loop < Math.sqrt(PositiveInteger)-1) {
        var string = string + ", "
      } else {
        var string = string + "."
      }
    }
  }
  ++loop
}

console.log(string + "\n")

//done
