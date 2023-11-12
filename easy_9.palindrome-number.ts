/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
	const s = x.toString()
	return s === s.split("").reverse().join("");
};
// @lc code=end

