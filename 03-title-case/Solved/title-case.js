// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function (str) {
  // str = "i love coding"
  // make str to array;
  var strArray = str.split(" "); //[i,love,coding]
  for (var i = 0; i < strArray.length; i++) {
    //split, capitalize, join
    strArray[i] =
      strArray[i].split("")[0].toUpperCase() + strArray[i].substring(1);
  }
  return strArray.join(" ");
};

// var titleCase = function (str) {
//   var result = [];
//   // turn str to a splited array
//   var strArray = str.split(" ");
//   // capital first letter
//   for (var i = 0; i < strArray.length; i++) {
//     // split strArray , then capitalize the first letter, then join to an array
//     var letterArray = strArray[i].split("");
//     letterArray[0] = letterArray[0].toUpperCase();
//     result.push(letterArray.join(""));
//   }
//   // make the array to a sentence
//   return result.join(" ");
// };

// var titleCase = function(str) {
//   var result = [];

//   var words = str.split(' ');

//   for (var i = 0; i < words.length; i++) {
//     var word = words[i].split('');

//     word[0] = word[0].toUpperCase();

//     result.push(word.join(''));
//   }

//   return result.join(' ');
// };
