/*
 * @lc app=leetcode id=1620 lang=typescript
 *
 * [1620] Coordinate With Maximum Network Quality
 */

// @lc code=start
function bestCoordinate(towers: number[][], radius: number): number[] {
    const n = 51;
    const counter = Array.from({ length: n }, () => new Array(n).fill(0));

    towers.forEach(([x, y, q]) => {
        const r2 = radius * radius;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                const d2 = Math.pow(x - i, 2) + Math.pow(y - j, 2);
                if (d2 <= r2) {
                    const count = Math.floor(q / (1 + Math.sqrt(d2)));
                    counter[i][j] += count;
                }
            }
        }
    });

    let x = 0;
    let y = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (counter[x][y] < counter[i][j]) {
                x = i;
                y = j;
            }
        }
    }

    return [x, y];
}
// @lc code=end
