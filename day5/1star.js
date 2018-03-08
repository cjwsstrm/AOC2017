var fs = require("fs");
var text = fs.readFileSync("./checkThese.txt").toString('utf-8').split('\n');

const text1 = text.map(x => {
  return parseInt(x);
})

// console.log(text1);

const testing1 = [0, 3, 0, 1, -3];

let currentIndex = 0;
let previousIndex = 0;
let indexValue = 0;
let counter = 0

const maxIndex = text1.length;

while(currentIndex < maxIndex && currentIndex >= 0) {
  // console.log(`Array at start: ${text1}`)
  indexValue = text1[currentIndex]
  // console.log(`indexValue was ${indexValue} at previousIndex: ${previousIndex}`)
  // console.log(`indexValue is ${indexValue} at currentIndex: ${currentIndex}`);
  previousIndex = currentIndex;
  currentIndex += indexValue;
  text1[previousIndex] += 1
  // console.log(`Next indexValue at previousIndex (${previousIndex}) : ${text1[previousIndex]}`)
  // console.log(`Array at end: ${text1}`)
  counter += 1;
}
console.log(currentIndex)
console.log(indexValue)
console.log(counter)