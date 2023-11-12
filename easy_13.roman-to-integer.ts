/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
	const units = {
		"I": 1,
		"V": 5,
		"X": 10,
		"L": 50,
		"C": 100,
		"D": 500,
		"M": 1000,
	} as const;
	let before = 0;
	return s.split("").map((it) => units[it] as number).reduce((acc, cur) => {
		if (before < cur) {
			acc -= before;
			acc += (cur - before);
		} else {
			acc += cur;
		}
		before = cur;
		return acc;
	}, 0);
    
};
// @lc code=end

