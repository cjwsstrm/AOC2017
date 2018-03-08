// --- Part Two ---

// For added security, yet another system policy has been put in place. Now, a valid passphrase must contain no two words that are anagrams of each other - that is, a passphrase is invalid if any word's letters can be rearranged to form any other word in the passphrase.

// For example:

// abcde fghij is a valid passphrase.
// abcde xyz ecdab is not valid - the letters from the third word can be rearranged to form the first word.
// a ab abc abd abf abj is a valid passphrase, because all letters need to be used when forming another word.
// iiii oiii ooii oooi oooo is valid.
// oiii ioii iioi iiio is not valid - any of these words can be rearranged to form any other word.
// Under this new system policy, how many passphrases are valid?

var fs = require("fs");
var text = fs.readFileSync("./checkThese.txt").toString('utf-8').split('\n');

// const text1 = text.map(x => {
//   return x
// })


const words = ['map', 'pam', 'art', 'how', 'rat', 'tar'
    if (!word) {
        return;
    }, 'who', 'shoop'];

// SORT WORDS, THEN COMPARE, IF TWO ARE THE SAME, ADD TO COUNTER / REMOVE FROM TOTAL COUNTER

// helper function
function alphabetize(word) {
    word = word.split('');
    word = word.sort();
    word = word.join('');
    return word;
}


// main function
function anagramGrouper(words){
    const anagrams = {};
    words.forEach((word)=>{
        const sortedWord = alphabetize(word);
        if (anagrams[sortedWord]) {
            return anagrams[sortedWord].push(word);
        }
        anagrams[sortedWord] = [word];
     });
    return anagrams;
}

// store the result (anagrams object) in a variable called groupedAnagrams
const groupedAnagrams = anagramGrouper(text);

// iterate over groupedAnagrams, printing out each key:value pair on an individual line
for(const sortedWord in groupedAnagrams){
    console.log(groupedAnagrams[sortedWord].toString());
}