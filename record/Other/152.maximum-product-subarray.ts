/*
 * @lc app=leetcode id=152 lang=typescript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * 方法一 f[i] 记录以i结尾最大值， g[i] 记录以i结尾的最小值
 * O(N) times + O(N) space
 * @param nums
 * @returns
 */
function maxProduct_dp(nums: number[]): number {
    let len = nums.length;
    let f = new Array(len);
    let g = new Array(len);
    (f[0] = nums[0]), (g[0] = nums[0]);
    let res = nums[0];
    for (let i = 1; i < len; i++) {
        if (nums[i] > 0) {
            f[i] = Math.max(f[i - 1] * nums[i], nums[i]);
            g[i] = Math.min(g[i - 1] * nums[i], nums[i]);
        } else {
            f[i] = Math.max(g[i - 1] * nums[i], nums[i]);
            g[i] = Math.min(f[i - 1] * nums[i], nums[i]);
        }
        res = Math.max(res, f[i]);
    }
    return res;
}

/**
 * 方法二：由方法一可知 f[i], g[i] 只与 f[i - 1], g[i - 1] 有关系
 * 因此可以用两个变量记录f[i - 1], g[i - 1]。
 * O(N) times + O(1) space
 * @param nums
 * @returns
 */
function maxProduct2(nums: number[]): number {
    let len = nums.length;
    let _max = nums[0],
        _min = nums[0];
    let res = nums[0];
    for (let i = 1; i < len; i++) {
        if (nums[i] < 0) {
            [_max, _min] = [_min, _max];
        }
        _max = Math.max(_max * nums[i], nums[i]);
        _min = Math.min(_min * nums[i], nums[i]);
        res = Math.max(res, _max);
    }
    return res;
}
// @lc code=end
