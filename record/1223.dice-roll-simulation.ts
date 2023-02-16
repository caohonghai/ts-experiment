/*
 * @lc app=leetcode id=1223 lang=typescript
 *
 * [1223] Dice Roll Simulation
 */

// @lc code=start
function dieSimulator(n: number, rollMax: number[]): number {
    const MOD = 1e9 + 7;
    const d: number[][][] = new Array(n + 1)
        .fill(0)
        .map(() => new Array(6).fill(0).map(() => new Array(16).fill(0)));
    for (let j = 0; j < 6; j++) {
        d[1][j][1] = 1;
    }
    for (let i = 2; i <= n; i++) {
        let t = i & 1;
        for (let j = 0; j < 6; j++) {
            d[t][j].fill(0);
        }
        for (let j = 0; j < 6; j++) {
            for (let k = 1; k <= rollMax[j]; k++) {
                for (let p = 0; p < 6; p++) {
                    if (p !== j) {
                        d[t][p][1] = (d[t][p][1] + d[t ^ 1][j][k]) % MOD;
                    } else if (k + 1 <= rollMax[j]) {
                        d[t][p][k + 1] =
                            (d[t][p][k + 1] + d[t ^ 1][j][k]) % MOD;
                    }
                }
            }
        }
    }

    let res = 0;
    for (let j = 0; j < 6; j++) {
        for (let k = 1; k <= rollMax[j]; k++) {
            res = (res + d[n & 1][j][k]) % MOD;
        }
    }
    return res;
}
// @lc code=end
