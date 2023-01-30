/*
 * @lc app=leetcode id=1658 lang=typescript
 *
 * [1658] Minimum Operations to Reduce X to Zero
 */

// @lc code=start
function minOperations(nums: number[], x: number): number {
    const len: number = nums.length;
    const prefix: Array<number> = new Array(len + 1).fill(0);
    const suffix: Array<number> = new Array(len + 1).fill(0);
    for (let i = 0; i < len; i++) {
        if (i === 0) {
            suffix[len - 1] = nums[len - 1];
        } else {
            suffix[len - i - 1] = suffix[len - i] + nums[len - i - 1];
        }
        prefix[i + 1] = prefix[i] + nums[i];
    }
    const binSearch = (i: number): number => {
        let l = 0,
            r = len - 1;
        while (l < r) {
            let m = (l + r) >> 1;
            if (prefix[m] > x - suffix[i]) {
                r = m - 1;
            } else if (prefix[m] === x - suffix[i]) {
                return m;
            } else {
                l = m + 1;
            }
        }
        return l;
    };
    let ans: number = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i <= len; i++) {
        if (suffix[i] > x) continue;
        if (suffix[i] === x) ans = Math.min(ans, len - i);
        const idx: number = binSearch(i);
        if (idx < i && prefix[idx] === x - suffix[i]) {
            ans = Math.min(ans, idx + (len - i));
        }
    }

    return ans === Number.MAX_SAFE_INTEGER ? -1 : ans;
}
// @lc code=end
