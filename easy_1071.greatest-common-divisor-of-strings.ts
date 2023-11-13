/*
 * @lc app=leetcode id=1071 lang=typescript
 *
 * [1071] Greatest Common Divisor of Strings
 */

// @lc code=start
function gcdOfStrings(str1: string, str2: string): string {
  const minLength = Math.min(str1.length, str2.length);
  let common = "";
  let result = "";
  for (let i = 0; i < minLength; i++) {
    const c1 = str1[i], c2 = str2[i];
    if (c1 === c2) {
      common += c1;
      const divided = str1.replaceAll(common, "") + str2.replaceAll(common, "");
      if (divided === "") {
        result = common;
      }
    } else {
      break;
    }
  }
  return result;

};
// @lc code=end
