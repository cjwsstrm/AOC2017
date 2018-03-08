const numbers = [4, 10, 4, 1, 8, 4, 9, 14, 5, 1, 14, 15, 0, 15, 3, 5];

let testNumbers = [0, 2, 7, 0];

const input = testNumbers

const seen = new Set()

while (!seen.has(input.join(','))) {
  seen.add(input.join(','))
  console.log(seen)
  let max = Math.max(...input)
  let maxIndex = input.indexOf(max)
  input[maxIndex] = 0
  for(let i = 1; i <= max; i++) {
    input[(maxIndex + i) % input.length] ++
  }
}

console.log('Number of redistribution cycles before duplicate:' , seen.size)