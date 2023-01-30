/*
 * @lc app=leetcode id=1464 lang=typescript
 *
 * [1464] Maximum Product of Two Elements in an Array
 */

// @lc code=start
function maxProduct(nums: number[]): number {
    nums.sort((a, b) => b - a);
    return (nums[0] - 1) * (nums[1] - 1);
}
// @lc code=end
