/*
 * @lc app=leetcode id=2335 lang=typescript
 *
 * [2335] Minimum Amount of Time to Fill Cups
 */

// @lc code=start
function fillCups(amount: number[]): number {
    amount.sort((a, b) => a - b);
    const sum = amount[0] + amount[1];
    let result = amount[2];
    if (amount[2] < sum) {
        result += Math.ceil((sum - amount[2]) / 2);
    }
    return result;
}
// @lc code=end
