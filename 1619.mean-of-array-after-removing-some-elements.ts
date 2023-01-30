/*
 * @lc app=leetcode id=1619 lang=typescript
 *
 * [1619] Mean of Array After Removing Some Elements
 */

// @lc code=start
function trimMean(arr: number[]): number {
    arr.sort((a, b) => a - b);
    let n = arr.length,
        tot = 0;
    for (let i = n / 20; i < n - n / 20; i++) tot += arr[i];
    return tot / (n * 0.9);
}
// @lc code=end
