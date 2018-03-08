const number = 14;

const sqrtNumber = Math.sqrt(number);
console.log(sqrtNumber)

const absNumber = Math.floor(sqrtNumber);
// THIS IS 537
console.log(absNumber)

const extraNumber = (number % absNumber);
// THIS IS 4200
console.log(extraNumber)

console.log(extraNumber - 1);
// THE NUMBER OF STEPS AWAY FROM THE STARTING POINT FOLLOWING TAXICAB GEOMETRY

let stepsAway = 0

// -1 works for numbers towards uneven squares
// +1 works for numbers towards even squares
const stepCounter = (number) => {
  const numberSqrd = Math.sqrt(number);
  const numberAbsd = Math.floor(numberSqrd);
  if ((number % numberAbsd) === 0) {
    stepsAway = numberAbsd - 1;
  }
  else {
    stepsAway = (number % numberAbsd) - 1;
  }
  return stepsAway
}

console.log(stepCounter(number))