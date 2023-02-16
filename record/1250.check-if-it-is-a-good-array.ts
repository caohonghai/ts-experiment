/*
 * @lc app=leetcode id=1250 lang=typescript
 *
 * [1250] Check If It Is a Good Array
 */

// @lc code=start
function isGoodArray(nums: number[]): boolean {
    const gcd = (a: number, b: number): number => {
        if (b) while ((a %= b) && (b %= a));
        return a + b;
    };
    let g = nums[0];
    for (const n of nums) {
        g = gcd(g, n);
        if (g === 1) break;
    }
    return g === 1;
}
// @lc code=end
