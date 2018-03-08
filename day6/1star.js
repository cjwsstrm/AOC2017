const numbers = [4, 10, 4, 1, 8, 4, 9, 14, 5, 1, 14, 15, 0, 15, 3, 5]

const testNumbers = [0, 2, 7, 0]

let redistributionValue = 0;
let arraystoCheck = {};

// function redistValue(array) {
//   return redistributionValue = Math.floor(highestNumber / (array.length - 1))
// }
let highestNumber = 0;

function arrayCollector(array) {
  for (i = 0; i < array.length; i++) {
    // if (array[i] > highestNumber) {
    //   highestNumber = array[i];
    // }
    let arrayKey = array.join('');
    arraystoCheck[arrayKey] = [arrayKey];
  }
}
// arrayCollector(testNumbers)
// console.log(arraystoCheck)

redistributed = [];

const redistributor = (array) => {
  let highestNumber = Math.max(...array);
  redistributionValue = Math.floor(highestNumber / (array.length - 1));
  arrayCollector(array)
  console.log(arraystoCheck)
  for (j = 0; j < array.length; j ++) {
    if (array[j] === highestNumber) {
      array[j] -= (highestNumber - 1);
    } else {
      // console.log(redistributionValue)
      array[j] += redistributionValue
    }
  }
}
// redistributor(testNumbers)

// console.log(redistributed)

// Loop redistribute until two keys are the same in arraystoCheck;
// console.log(arraystoCheck)


for (k = 0; k < 6; k++) {
  redistributor(testNumbers)
}

// console.log(arraystoCheck)