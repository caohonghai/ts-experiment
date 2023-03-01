/*
 * @lc app=leetcode id=2373 lang=typescript
 *
 * [2373] Largest Local Values in a Matrix
 */

// @lc code=start
function largestLocal(grid: number[][]): number[][] {
    const arr: number[][] = [];
    const len = grid.length;
    for (let i = 0; i < len - 2; i++) {
        const t: number[] = [];
        for (let j = 0; j < len - 2; j++) {
            let _max = 0;
            for (let x = i; x < i + 3; x++) {
                for (let y = j; y < j + 3; y++) {
                    _max = Math.max(_max, grid[x][y]);
                }
            }
            t.push(_max);
        }
        arr.push(t);
    }
    return arr;
}
// @lc code=end
