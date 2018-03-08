'use strict'

{
  const fs = require('fs')

  fs.readFile('./testData.txt', 'utf8', (err, data) => {

    let children = new Set()
    let parents = new Set()

    data.trim().split('\n').map(row => {
      if(row.indexOf('>') !== -1) {
        console.log(row)
        // console.log(row.indexOf('>'))
        const rowChildren = row.split('>')[1].trim().split(',').map(x => { 
          // console.log(x.trim)
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
    
    let secondParents = new Set();
    
    let secondRoots = [...children]
    // console.log(secondRoots)
  })

  
}
