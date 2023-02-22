/*
 * @lc app=leetcode id=1140 lang=typescript
 *
 * [1140] Stone Game II
 */

// @lc code=start
function stoneGameII(piles: number[]): number {
    let n = piles.length;
    const f: number[][] = new Array(n + 2)
        .fill(0)
        .map(() => new Array(n + 1).fill(0));
    const s: number[] = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        s[i] = s[i - 1] + piles[i - 1];
    }
    for (let i = n; i > 0; i--) {
        for (let j = 1; j <= n; j++) {
            for (let k = 1; i + k - 1 <= n && k <= j * 2; k++) {
                f[i][j] = Math.max(
                    f[i][j],
                    s[n] - s[i - 1] - f[i + k][Math.max(k, j)],
                );
            }
        }
    }
    return f[1][1];
}
// @lc code=end
