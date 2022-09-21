var isPalindrome = function (s) {
  const alphaNumeric = '1234567890qwertyuiopasdfghjklzxcvbnm';
  // 2 pointers
  let left = 0;
  let right = s.length - 1;

  let lettersLeft = 0;
  let lettersRight = 0;
  while (left <= right) {
    const currentLeft = s[left].toLowerCase();
    const currentRight = s[right].toLowerCase();
    if (!alphaNumeric.includes(currentLeft)) left++;
    else if (!alphaNumeric.includes(currentRight)) right--;
    else if (currentLeft !== currentRight) return false;
    else if (currentLeft === currentRight) {
      left++;
      lettersLeft++;
      right--;
      lettersRight++;
    }
  }

  return true;
};

console.log(currentLeft, currentRight, 'left right');
console.log(lettersLeft, lettersRight, 'left right');

console.log(currentLeft == currentRight, currentLeft + ' = ' + currentRight);

console.log(isPalindrome('peeeep'));
