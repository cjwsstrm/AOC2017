// It sounds like the goal is to find the only two numbers in each row where one evenly divides the other - that is, where the result of the division operation is a whole number. They would like you to find those numbers on each line, divide them, and add up each line's result.

var numbers = {
  numbers01: [5806, 6444, 1281, 38, 267, 1835, 223, 4912, 5995, 230, 4395, 2986, 6048, 4719, 216, 1201],
  numbers02: [74, 127, 226, 84, 174, 280, 94, 159, 198, 305, 124, 106, 205, 99, 177, 294],
  numbers03: [1332, 52, 54, 655, 56, 170, 843, 707, 1273, 1163, 89, 23, 43, 1300, 1383, 1229],
  numbers04: [5653, 236, 1944, 3807, 5356, 246, 222, 1999, 4872, 206, 5265, 5397, 5220, 5538, 286, 917],
  numbers05: [3512, 3132, 2826, 3664, 2814, 549, 3408, 3384, 142, 120, 160, 114, 1395, 2074, 1816, 2357],
  numbers06: [100, 2000, 112, 103, 2122, 113, 92, 522, 1650, 929, 1281, 2286, 2259, 1068, 1089, 651],
  numbers07: [646, 490, 297, 60, 424, 234, 48, 491, 245, 523, 229, 189, 174, 627, 441, 598],
  numbers08: [2321, 555, 2413, 2378, 157, 27, 194, 2512, 117, 140, 2287, 277, 2635, 1374, 1496, 1698],
  numbers09: [101, 1177, 104, 89, 542, 2033, 1724, 1197, 474, 1041, 1803, 770, 87, 1869, 1183, 553],
  numbers10: [1393, 92, 105, 1395, 1000, 85, 391, 1360, 1529, 1367, 1063, 688, 642, 102, 999, 638],
  numbers11: [4627, 223, 188, 5529, 2406, 4980, 2384, 2024, 4610, 279, 249, 2331, 4660, 4350, 3264, 242],
  numbers12: [769, 779, 502, 75, 1105, 53, 55, 931, 1056, 1195, 65, 292, 1234, 1164, 678, 1032],
  numbers13: [2554, 75, 4406, 484, 2285, 226, 5666, 245, 4972, 3739, 5185, 1543, 230, 236, 3621, 5387],
  numbers14: [826, 4028, 4274, 163, 5303, 4610, 145, 5779, 157, 4994, 5053, 186, 5060, 3082, 2186, 4882],
  numbers15: [588, 345, 67, 286, 743, 54, 802, 776, 29, 44, 107, 63, 303, 372, 41, 810],
  numbers16: [128, 2088, 3422, 111, 3312, 740, 3024, 1946, 920, 131, 112, 477, 3386, 2392, 1108, 2741],
};


const addedValues = [];

function checkInteger(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] != array[j]) {
        if (array[i] % array[j] === 0) {
          const newValue = array[i] / array[j]
          addedValues.push(newValue);
          // console.log('success! ', newSet[i], array[j])
        }
      }
    }
  };
}

for (let array in numbers) {
 checkInteger(numbers[array])
}
// console.log(addedValues)

  // Loop over array
  // Compare each value and see if number a % number b === 0
  // if it is, push value of number a / number b to a new array
  // add up all the values in that array

  const sum = addedValues.reduce(function (a, b) {
    return a + b;
  }, 0);
  
 console.log(sum)