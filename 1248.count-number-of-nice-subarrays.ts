/*
 * @lc app=leetcode id=1248 lang=typescript
 *
 * [1248] Count Number of Nice Subarrays
 */

// @lc code=start
function numberOfSubarrays(nums: number[], k: number): number {
    // nums = nums.map(n => n & 1 ? 1 : 0);
    let sum = new Array(nums.length + 1).fill(0);
    let mp: Map<number, number> = new Map();
    for (let i = 1; i <= nums.length; i++) {
        if (nums[i - 1] & 1) nums[i - 1] = 1;
        else nums[i - 1] = 0;
        sum[i] = sum[i - 1] + nums[i - 1];
        mp.set(sum[i], (mp.get(sum[i]) ?? 0) + 1);
    }
    let res = 0;
    for (let i = 0; i <= nums.length; i++) {
        res += mp.get(sum[i] + k) ?? 0;
    }
    return res;
}

// @lc code=end
