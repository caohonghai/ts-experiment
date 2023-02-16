/*
 * @lc app=leetcode id=2341 lang=typescript
 *
 * [2341] Maximum Number of Pairs in Array
 */

// @lc code=start
function numberOfPairs(nums: number[]): number[] {
    const mp: Map<number, number> = new Map();
    for (const n of nums) mp.set(n, (mp.get(n) ?? 0) + 1);
    let a = 0,
        b = 0;
    for (const [k, v] of mp) {
        a += v >> 1;
        b += v & 1;
    }
    return [a, b];
}
// @lc code=end
