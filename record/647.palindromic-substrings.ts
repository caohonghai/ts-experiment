/*
 * @lc app=leetcode id=647 lang=typescript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @Author: Acckno1
 * @Date: 2022/11/04 22:38:40
 */
function countSubstrings(s: string): number {
    const len = s.length;
    let f: boolean[][] = new Array(len + 5)
        .fill(false)
        .map(() => new Array(len + 5).fill(false));
    let ans = 0;
    let str = s.split('');
    for (let i = 0; i < len; i++) {
        for (let j = 0; j <= i; j++) {
            f[i][j] = str[i] === str[j] && (i - j <= 2 || f[i - 1][j + 1]);
            ans += f[i][j] ? 1 : 0;
        }
    }
    return ans;
}
// @lc code=end
