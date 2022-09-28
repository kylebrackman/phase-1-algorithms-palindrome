function isPalindrome(word) {
  const reverseWord = word.split('').reverse().join('')
    return word === reverseWord
}

/* 
  turn the word(s) into an array
  split / reverse that array and plug into a variable
  join the array into one string and set to variable
  check if word and reverseWord === eachother 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("")
  // my test case below
  console.log("Expecting: true")
  console.log("=>", isPalindrome("do geese see god"))
}

module.exports = isPalindrome;
