/*
 * @lc app=leetcode id=1431 lang=typescript
 *
 * [1431] Kids With the Greatest Number of Candies
 */

// @lc code=start
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const max = [...candies].sort((a, b) => b - a)[0];
  return candies.map(c => c + extraCandies >= max);
};
// @lc code=end

