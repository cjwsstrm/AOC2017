// For example:

// aa bb cc dd ee is valid.
// aa bb cc dd aa is not valid - the word aa appears more than once.
// aa bb cc dd aaa is valid - aa and aaa count as different words.

// The system's full passphrase list is available as your puzzle input. How many passphrases are valid?


var fs = require("fs");
var text = fs.readFileSync("./checkThese.txt").toString('utf-8').split('\n');

const text1 = text.map(x => {
  return x
})

// console.log(text1);

const testing1 = ['aa bb cc dd ee is valid',
  'aa bb cc dd aa',
  'aa bb cc dd aaa']

// SUPER UGLY AND NOT VERY USEFUL
const checkWord = (array) => {
  let countofValidPhrases = 0;
  array.forEach((array) => {
    let collection = {};
    let words = array.split(' ');
    words.forEach((word) => {
      collection[word] = word;
    });
    for (var i = 0; i < words.length; i++) {
      if (words[i] === collection[words[i]]) {
        collection[words[i]] = 0;
      }
    }
    let validPhrases = 0
    let total = words.reduce((occurrences, word) => {
      collection[word]++
      return collection;
    }, 0);
    for (let key in total) {
      if (total[key] === 1) {
        validPhrases += 1
      }
    }
    if (validPhrases === Object.keys(total).length) {
      countofValidPhrases += 1;
    }
  });
  console.log(countofValidPhrases)
};

// checkWord(text);