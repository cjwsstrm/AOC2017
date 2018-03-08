'use strict'

const fs = require("fs");
const text = fs.readFileSync("./realData.txt").toString('utf-8').split('\n');

// console.log(text)


const solve = (arr) => {
  let registers = {}

  for (var i=0; i < arr.length; ++i) {
    let instruction = arr[i].split(" ");
    let register1 = instruction[0];
    let direction = instruction[1];
    let register2 = instruction[4];
    let conditional = instruction[5];
    // console.log(conditional)
    let change = parseInt(instruction[2]);
    if (!registers.hasOwnProperty(register1)) {
      registers[register1] = 0;
    }
    if (!registers.hasOwnProperty(register2)) {
      registers[register2] = 0;
    }
    if (eval(registers[register2] + conditional + instruction[6])) {
      switch (direction) {
        case 'inc':
        registers[register1] = registers[register1] + change
        break;
        case 'dec':
        registers[register1] = registers[register1] - change
        break
        default:
        break;
      }
    }
  }
  // console.log(registers)
  
  let checkForHighest = Object.values(registers);
  // let min = Math.min(...checkForHighest);
  let max = Math.max(...checkForHighest);
  
  console.log( `Max value: ${max}` );
  // return 'sup';
};

solve(text);