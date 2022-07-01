// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function (str) {
  // var str = "Hello World!";
  var count = {};

  for (var i = 0; i < str.length; i++) {
    //find letters
    var letter = str[i];

    // add numbers to object
    // if (letter in count) {
    //   count[letter]++;
    // } else {
    //   count[letter] = 1;
    // }

    //refractor
    letter in count ? count[letter]++ : (count[letter] = 1);
  }
  return count;
};

// var characterCount = function (str) {
//   var charMap = {};

//   for (var i = 0; i < str.length; i++) {
//     var char = str[i]; //"H","e"

//     if (charMap[char]>0) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1; //"H:1"
//     }
//   }

//   return charMap;
// };
