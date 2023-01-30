/*
 * @lc app=leetcode id=2520 lang=typescript
 *
 * [2520] Count the Digits That Divide a Number
 */

// @lc code=start
function countDigits(num: number): number {
    let t = num;
    let ans = 0;
    while (num) {
        const val = num % 10;
        num = Math.floor(num / 10);
        if (!(t % val)) ans++;
    }
    return ans;
}
// @lc code=end
