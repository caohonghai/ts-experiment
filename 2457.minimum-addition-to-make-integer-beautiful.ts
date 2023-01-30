/*
 * @lc app=leetcode id=2457 lang=typescript
 *
 * [2457] Minimum Addition to Make Integer Beautiful
 */

// @lc code=start
function makeIntegerBeautiful(n: number, target: number): number {
    let tail = 1;
    while (true) {
        let m = n + ((tail - (n % tail)) % tail),
            x = m;
        let t = 0;
        while (x != 0) {
            t += x % 10;
            x = Math.floor(x / 10);
        }
        if (t <= target) return m - n;
        tail *= 10;
    }
}

// @lc code=end
