/*
 * @lc app=leetcode id=2455 lang=typescript
 *
 * [2455] Average Value of Even Numbers That Are Divisible by Three
 */

// @lc code=start
function averageValue(nums: number[]): number {
    let res: number = 0,
        cnt: number = 0;
    nums.forEach(n => {
        if (n % 3 === 0 && n % 2 === 0) {
            res += n;
            cnt++;
        }
    });
    return cnt === 0 ? 0 : Math.floor(res / cnt);
}
// @lc code=end
