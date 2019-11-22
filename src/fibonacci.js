const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = 78;

var number=null;
var fibonacci1=0
var fibonacci2=1
var fibonacciCurrent=0

console.log ()

while(number<MIN || number%1 || number>MAX){
var number = Number (readlineSync.question("Positive integer:"))
}

for (loop = 1;loop < number; loop++){
var fibonacciCurrent= fibonacci2+fibonacci1;
var fibonacci1 = fibonacci2;
var fibonacci2=fibonacciCurrent;
}

console.log("\n"+ fibonacci2.toLocaleString("en")+".")

//done
