/*
 * @lc app=leetcode id=209 lang=typescript
 *
 * [209] 长度最小的子数组
 */
function _minSubArrayLen(target: number, nums: number[]): number {
    let res = Infinity;
    let sum: number[] = new Array(nums.length + 1).fill(0);
    for (let i = 1; i <= nums.length; i++)
        sum[i] = sum[i - 1] + nums[i - 1];
    const binSearch = (left: number, target: number): number => {
        let l = left, r = nums.length;
        while (l <= r) {
            let mid = (l + r) >> 1;
            if (sum[mid] >= target) r = mid - 1;
            else l = mid + 1;
        }
        return l;
    }
    for (let i = 0; i < nums.length; i++) {
        const d = binSearch(i, sum[i] + target);
        if (d <= nums.length)
            res = Math.min(res, d - i);
    }

    return res === Infinity ? 0 : res;
};
// @lc code=start
/**
 * @Author: Acckno1
 * @Date: 2022/10/31 22:03:47
 */
function minSubArrayLen(target: number, nums: number[]): number {
    const len = nums.length;
    let l = 0, r = 0, sum = 0, res = len + 1;
    while (r < len) {
        sum += nums[r++];
        while (sum >= target) {
            res = res < r - l ? res : r - l;
            sum -= nums[l++];
        }
    }
    return res > len ? 0 : res;
};
// @lc code=end

