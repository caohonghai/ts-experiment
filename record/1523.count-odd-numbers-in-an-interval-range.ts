/*
 * @lc app=leetcode id=1523 lang=typescript
 *
 * [1523] Count Odd Numbers in an Interval Range
 */

// @lc code=start
function countOdds(low: number, high: number): number {
    if ((low & 1) + (high & 1) === 0) {
        return (high - low) >> 1;
    } else {
        return (low & 1) + (high & 1) + ((high - low - 1) >> 1);
    }
}
// @lc code=end
