// Write code to create a function that accepts a string and returns the string in camelCase

// var camelCase = function(str) {
//   var result = "";
//   var words = str.toLowerCase().split(" ");

//   for (var i = 0; i < words.length; i++) {
//     var word = words[i];
//     var letters = word.split("");

//     if (i > 0) {
//       letters[0] = letters[0].toUpperCase();
//     }

//     result += letters.join("");
//   }

//   return result;
// };

var camelCase = function (str) {
  // var str = "let the force flow through you";
  // return "letTheForceFlowThroughYou";

  // split str to words
  var words = str.split(" "); //[let,the,force...]

  //lowercase the first word
  words[0] = words[0].charAt(0).toLowerCase() + words[0].substring(1);

  // capitalize the first letter
  for (var i = 1; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
  }

  // join together
  return words.join("");
};
