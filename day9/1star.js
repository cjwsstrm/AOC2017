var fs = require("fs");
var text = fs.readFileSync("./realData.txt").toString('utf-8');

// const text1 = text.map(x => {
//   return x;
// })


// console.log(text)

let depth = 0;
let score = 0;
let isgarbage = false


for (let i = 0; i < text.length; i++) {
  if (text[i] === '<') {
    isgarbage = true;
  } 
  if (text[i] === '>') {
    isgarbage = false;
  } 
  if (text[i] === '{' && !isgarbage) {
    depth ++;
  }
  if (text[i] === '}' && !isgarbage) {
    score += depth;
    depth --;
  }
  if (text[i] === '!') {
    i++
  }
  
}
console.log(score)