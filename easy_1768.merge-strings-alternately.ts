/*
 * @lc app=leetcode id=1768 lang=typescript
 *
 * [1768] Merge Strings Alternately
 */

// @lc code=start
function mergeAlternately(word1: string, word2: string): string {
	const result: string[] = [];
	const limit = Math.min(word1.length, word2.length);
	for (let i = 0; i < limit; i++) {
		result.push(word1.charAt(i) + word2.charAt(i));
	}
	return result.join("") + word1.substring(result.length) + word2.substring(result.length);
};
// @lc code=end

