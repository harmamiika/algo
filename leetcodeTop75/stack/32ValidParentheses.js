var isValid = function (s) {
  const stack = [];
  for (let letter of s) {
    if ('([{'.includes(letter)) stack.push(letter);
    else if (letter === ')' && stack.pop() !== '(') return false;
    else if (letter === ']' && stack.pop() !== '[') return false;
    else if (letter === '}' && stack.pop() !== '{') return false;
  }
  return stack.length === 0;
};
