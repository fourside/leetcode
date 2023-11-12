/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
	const result: string[] = [];
	for (let i = 0; i < 200; i++) {
		const chars = strs.map(it => it[i]);
		const sample = chars[0];
		if (chars.every((c) => c === sample)) {
			result.push(chars[0]);
		} else {
			break;
		}
	}
	return result.join("");
};
// @lc code=end

