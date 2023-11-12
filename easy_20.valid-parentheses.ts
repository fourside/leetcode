/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
    const stack: ("paren" | "square" | "brace" )[] = []
	for (const c of s) {
		switch (c) {
			case "(":
				stack.push("paren");
				continue;
			case ")":
				const may_paren = stack.pop();
				if (may_paren !== "paren") {
					return false;
				}
				continue;
			case "[":
				stack.push("square");
				continue;
			case "]":
				const may_square = stack.pop();
				if (may_square !== "square") {
					return false;
				}
				continue;
			case "{":
				stack.push("brace");
				continue;
			case "}":
				const may_bracet = stack.pop();
				if (may_bracet !== "brace") {
					return false;
				}
				continue;
			default:
				// ignore
		}
	}
	return stack.length === 0;
};
// @lc code=end

