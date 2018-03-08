const numbers = [4, 10, 4, 1, 8, 4, 9, 14, 5, 1, 14, 15, 0, 15, 3, 5];

let testNumbers = [0, 2, 7, 0];

let duplicateArray = [];
let hasDuplicate = false;
let aa = ','
let bb = ''

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

  let next = arr.toString().replace(/,/g, '')
  redistributed.push({[next]: next})
  // duplicateArray.push(next2)
  return arr
}

// redistribute(testNumbers)


var values = [4,2,3,1,4]

// solution
const checkDuplicate = (list) => {
  // console.log(list)
  list.sort().sort((a, b) => {
    if (a === b) {
      hasDuplicate = true
      aa = a;
      bb = b;
    }
  })
  // console.log(aa)
  return list;
}

function dedup(arr) {
	var hashTable = {};

	return arr.filter(function (el) {
		var key = JSON.stringify(el);
		var match = Boolean(hashTable[key]);
    console.log(match)
    console.log(key)
		if (match ? false : hashTable[key] = true) {
      aa = el
      return hasDuplicate = true
    };
	});
}

// var deduped = dedup([
// 	{ a: 1 },
// 	{ a: 1 },
// 	[ 1, 2 ],
// 	[ 1, 2 ]
// ]);
// console.log(checkDuplicate(redistributed))
function iterator(array) {
  // console.log(redistributed)
  // while (hasDuplicate === false) {
    for (let j = 0; j < 5; j++) {
      redistribute(array)
      // checkDuplicate(duplicateArray)
      console.log(dedup(redistributed));
      // console.log(redistributed[redistributed.length-1])
  }
}
iterator(testNumbers)
// console.log(redistributed)
// console.log(redistributed[0]['arr'])
console.log(redistributed.lastIndexOf(aa))