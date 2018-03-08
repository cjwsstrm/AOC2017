const numbers = [4, 10, 4, 1, 8, 4, 9, 14, 5, 1, 14, 15, 0, 15, 3, 5];

let testNumbers = [0, 2, 7, 0];

const input = numbers

const seen = new Set()

let newItem = '';

while (!seen.has(input.join(','))) {
  seen.add(input.join(','))
  // console.log(seen)
  let max = Math.max(...input)
  let maxIndex = input.indexOf(max)
  input[maxIndex] = 0
  for(let i = 1; i <= max; i++) {
    input[(maxIndex + i) % input.length] ++
    newItem = input.join(',') 
  }
}
let oldItems = Array.from(seen);
oldItems.push(newItem);

console.log('Duplicated blocks: ', newItem)
// console.log(oldItems)
console.log('indexOf duplicate: ', oldItems.indexOf(newItem))
console.log('lastIndexOf duplicate: ', oldItems.lastIndexOf(newItem))
console.log('Distance between duplicates: ', oldItems.lastIndexOf(newItem) - oldItems.indexOf(newItem))