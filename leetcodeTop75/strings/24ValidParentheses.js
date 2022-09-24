// Oma

var isValid = function (s) {
  let stack = [];
  for (let letter of s) {
    if (letter === '(') stack.push(')');
    else if (letter === '[') stack.push(']');
    else if (letter === '{') stack.push('}');
    else if (stack.pop() !== letter) return false;
  }
  return stack.length === 0;
};
