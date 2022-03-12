function isPalindrome(word) {
  let reverseString = word.split("").reverse().join("")
    if (word === reverseString) {
      return true
    } else {
      return false
    }
}

/* 
  Add your pseudocode here
*/

/*
  take string
  reverse string
  compare string
*/ 

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
