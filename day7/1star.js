// var fs = require("fs");
// var text = fs.readFileSync("./testData.txt").toString('utf-8').split('\n');

// const programStack = text.map(x => {
//   return x;
// })

// // const programAsSet = new Set(programStack)
// // console.log(programAsSet)


// let towerBase = {}
// let subTowerBases = {};

// let names = []
// const programStackCleaned = text.map(x => {
//   // console.log(x)
//   return x.replace(/\-|\>|\(|\)|\d+/g, '').split(',')
// })

// // replace(/\-|\>|\(|\)/g, '').split(', ')

// const setWeights = text.map(x => {
//   return parseInt(x.match(/\d+/g));
// })


// console.log(setWeights)

// // check for unique and matching weights to distribute towers  
// // find unique stack based on weight, set item[0] and 
// const checkWeights = (stack, weights) => {

// }

// // console.log(weights)
// console.log(programStackCleaned);


// let minStackLength = 0
// let stackLengths = [];
// function checkProgramStackLengths(stack) {
//   stackLengths = stack.map(x => {
//     return x.length
//   })
//   minStackLength = Math.min(...stackLengths);

// }
// checkProgramStackLengths(programStack)
// // console.log(minStackLength)
// // console.log(stackLengths)

// // function checkProgramStack



'use strict'

{
  const fs = require('fs')

  fs.readFile('./realData.txt', 'utf8', (err, data) => {

    let children = new Set()
    let parents = new Set()

    data.trim().split('\n').map(row => {
      if(row.indexOf('>') !== -1) {
        // console.log(row.indexOf('>'))
        const rowChildren = row.split('>')[1].trim().split(',').map(x => { 
          return x.trim()
        })
        rowChildren.map(child => { 
          children.add(child) 
          // console.log(children)
        })
        parents.add(row.split(' ')[0])
        // console.log(parents)
      }
    })

    let root = new Set([...parents].filter(item =>  !children.has(item)))
    console.log(root)
  })
}