// 28. Implement strStr()
// https://leetcode.com/problems/implement-strstr/

// Solution without using indexOf() method.

// submission - https://leetcode.com/submissions/detail/589539578/

const strStr = (haystack, needle) => {
  if (needle === '') {
    return 0;
  }
  for (let i = 0; i < haystack.length; i += 1) {
    let checkString = haystack.substring(i, i + needle.length);
    if (checkString === needle) {
      return i;
    }
  }
  return -1;
};

strStr('hello', 'll');
strStr('aaaaa', 'bba');
strStr('', '');
