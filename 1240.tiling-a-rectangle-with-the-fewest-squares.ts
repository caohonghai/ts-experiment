/*
 * @lc app=leetcode id=1240 lang=typescript
 *
 * [1240] Tiling a Rectangle with the Fewest Squares
 */

// @lc code=start
// http://int-e.eu/~bf3/squares/view.html#16,17
function tilingRectangle(n: number, m: number): number {
    const cover: number[][] = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));
    let ans = Infinity;
    if (n === m) return 1;
    let cur = 0;
    const dfs = (n: number, m: number, cur: number): void => {
        // cut
        if (cur >= ans) return;
        let full = true;
        let r: number = -1, c: number = -1;
        // check if it's filled
        for (let i = 0; i < n && full; i++) {
            for (let j = 0; j < m && full; j++) {
                if (cover[i][j] === 0) {
                    full = false;
                    r = i, c = j;
                }
            }
        }
        if (full) {
            ans = Math.min(ans, cur);
            return;
        }
        // enumerate feasible lengths
        for (let len = Math.min(n - r, m - c); len >= 1; len--) {
            // check empty position
            let empty = true;
            for (let i = r; i < r + len && empty; i++)
                for (let j = c; j < c + len && empty; j++)
                    if (cover[i][j] === 1)
                        empty = false;
            // cut
            if (!empty) continue;
            // coverage of specified areas
            for (let i = r; i < r + len; i++)
                for (let j = c; j < c + len; j++)
                    cover[i][j] = 1;
            // iterate next len
            dfs(n, m, cur + 1);
            // backtracking
            for (let i = r; i < r + len; i++)
                for (let j = c; j < c + len; j++)
                    cover[i][j] = 0;
        }
    }
    dfs(n, m, cur);
    return ans;
};

// @lc code=end

