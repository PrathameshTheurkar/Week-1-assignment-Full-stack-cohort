/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str=str.toLowerCase();
  let str1 = '';
for(let i=0;i<str.length;i++){
  if(str[i] >= 'a' && str[i] <= 'z' )str1+=str[i]
}

  for(let  i=0;i<str1.length/2;i++){
    if(str1[i] != str1[str1.length - i-1])return false
  
  }

  return true;
}

module.exports = isPalindrome;
