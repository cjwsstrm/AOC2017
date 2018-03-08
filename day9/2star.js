var fs = require("fs");
var text = fs.readFileSync("./realData.txt").toString('utf-8');

// console.log(text.length)

let characterCount = 0;
let isGarbage = false;


for (let i = 0; i < text.length; i++) {
  if (text[i] === '<' && !isGarbage) {
    i += 1
    isGarbage = true;
  } 
  if (text[i] === '>') {
    isGarbage = false;
  } 
  if (isGarbage && text[i] !== '!') {
    characterCount += 1;
  }
  if (text[i] === '!') {
    i += 1
  }
  
};
console.log(`Noncanceled Characters in Garbage Heaps: ${characterCount}`);


