// Write a function to take a string and return true if it contains valid sets of matching brackets, else return false

const validBrackets = function (str) {
  let stack = [];

  for (var i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
      continue;
    }

    if (char === ")") {
      if (stack.pop() !== "(") {
        return false;
      }
      continue;
    }

    if (char === "}") {
      if (stack.pop() !== "{") {
        return false;
      }
      continue;
    }

    if (char === "]") {
      if (stack.pop() !== "[") {
        return false;
      }
    }
  }

  return stack.length === 0;
};

const validBrackets = function (str) {
  var stack = [];
  // check the openinng brackets and push them to stack
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
      stack.push(str[i]);
      // continue;
    }

    // check the closing brackets
    if (str[i] === ")") {
      // pop the stack, if not match opening brackets, return false
      if (stack.pop() !== "(") {
        return false;
      }
      // continue;
    }

    if (str[i] === "]") {
      if (stack.pop() !== "[") {
        return false;
      }
      // continue;
    }
    if (str[i] === "}") {
      if (stack.pop() !== "{") {
        return false;
      }
    }
  }
  // check the stack length, and return
  return stack.length === 0;
};
