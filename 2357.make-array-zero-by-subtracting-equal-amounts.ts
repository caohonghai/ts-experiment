/*
 * @lc app=leetcode id=2357 lang=typescript
 *
 * [2357] Make Array Zero by Subtracting Equal Amounts
 */

// @lc code=start
function minimumOperations(nums: number[]): number {
    return new Set(nums.filter(_ => _)).size;
}
// @lc code=end
