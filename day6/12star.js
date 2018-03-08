const numbers = [4, 10, 4, 1, 8, 4, 9, 14, 5, 1, 14, 15, 0, 15, 3, 5];

let testNumbers = [0, 2, 7, 0];

// 0, 2, 7, 0
// 2, 4, 1, 2
// 3, 1, 2, 3
// 0, 2, 3, 4
// 1, 3, 4, 1
// 2, 4, 1, 2

// Count down highestNumber. For each step, increase 
// newValues[index] by one, and then move to next index and increase
// by one...

let redistributed = [];

const redistribute = (arr) => {
  let max = Math.max(...arr);
  const maxIndex = arr.indexOf(max);
  arr[maxIndex] = 0;

  for (let i = maxIndex + 1; max > 0; i++) {
    if (i === arr.length) {
      i = 0;
    }
    max -= 1;
    arr[i] += 1;
  };
  var next = arr.toString().replace(/,/g, '')
  //  console.log(arr)
  redistributed.push(next)

}

// redistribute(testNumbers)

function iterator(array) {
  for (let j = 0; j < 10000; j++) {
    redistribute(array)
  }
}
iterator(testNumbers)

function arrayChecker(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      console.log(array[j])
      if (array[i] === (array[j])) {
        console.log(array.indexOf(array[i]))
        return array.indexOf(array[j])
      }
    }
  }
}



console.log(redistributed)
console.log(arrayChecker(redistributed))