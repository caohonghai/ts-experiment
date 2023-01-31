/*
 * @lc app=leetcode id=2319 lang=typescript
 *
 * [2319] Check if Matrix Is X-Matrix
 */

// @lc code=start
function checkXMatrix(grid: number[][]): boolean {
    const len: number = grid.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (i == j || i + j === len - 1) {
                if (grid[i][j] === 0) return false;
            } else {
                if (grid[i][j] !== 0) return false;
            }
        }
    }
    return true;
}
// @lc code=end
