const numbers = [4, 10, 4, 1, 8, 4, 9, 14, 5, 1, 14, 15, 0, 15, 3, 5]

const testNumbers = [0, 2, 7, 0]

// let redistributionValue = 0;
let arraystoCheck = {};

// function arrayCollector(array) {
//   let arrayKey = array.join('');
//   for (i = 0; i < array.length; i++) {
//     arraystoCheck[k] = array;
//   }
//   // let redistributionValue = Math.max(...array);
// }

const redistributor = (array) => {
  for (k = 0; k < 4; k++) {
    console.log(array)
    let arrayKey = array.join('');
    let redistributionValue = Math.max(...array);
    // console.log(redistributionValue)
    for (j = 0; j < array.length; j++) {
      // array.sort(function (a, b) { return b - a });
      redistributionValue = 0;
      for (y = 0; y < redistributionValue; y++) {
        array[k] = 0;
        array[k] += 1;
      }
      arraystoCheck[k] = array;
    }
  }
}
redistributor(testNumbers)


// Loop redistribute until two keys are the same in arraystoCheck;
// console.log(arraystoCheck)

// for (k = 0; k < 6; k++) {
// arrayCollector(testNumbers)
// }

// arrayCollector(testNumbers)
// console.log(k);


console.log(arraystoCheck)