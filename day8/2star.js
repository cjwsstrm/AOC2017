'use strict'

const fs = require("fs");
const text = fs.readFileSync("./realData.txt").toString('utf-8').split('\n');

// console.log(text)


const solve = (arr) => {
  let values = {}
  let topHighest = 0;

  for (var i=0; i < arr.length; ++i) {
    let instructions = arr[i].split(" ");
    let value1 = instructions[0];
    let value2 = instructions[4];
    let plusOrMinus = instructions[1];
    let conditional = instructions[5];
    let change = parseInt(instructions[2]);
    if (!values.hasOwnProperty(value1)) {
      values[value1] = 0;
    }
    if (!values.hasOwnProperty(value2)) {
      values[value2] = 0;
    }
    if (eval(values[value2] + conditional + instructions[6])) {
      switch (plusOrMinus) {
        case 'inc':
        values[value1] = values[value1] + change
        break;
        case 'dec':
        values[value1] = values[value1] - change
        break
        default:
        break;
      }
    }
    let checkForHighest = Object.values(values);
    let max = Math.max(...checkForHighest);
    if (max > topHighest) {
      topHighest = max;
    }
  }
  console.log( `Max value throughout entire operation: ${topHighest}` );
};

solve(text);