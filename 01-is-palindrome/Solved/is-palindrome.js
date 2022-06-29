// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function (str) {
  // THIS DOESN'T WORK!!!
  //   for (var i = 0; i < str.length / 2; i++) {
  //     if (str[i] !== str[str.length - i - 1]) {
  //       return false;
  //     }
  //     return true;
  //   }

  for (var i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  // NEED TO PUT THE TRUE OUT OF FOR LOOP!!
  return true;
};

// var isPalindrome = function(str) {
//   var reversedString = str
//     .split('')
//     .reverse()
//     .join('');

//   if (reversedString === str) {
//     return true;
//   } else {
//     return false;
//   }
// };


