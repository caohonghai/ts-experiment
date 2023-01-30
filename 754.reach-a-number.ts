/*
 * @lc app=leetcode id=754 lang=typescript
 *
 * [754] Reach a Number
 */

// @lc code=start
function reachNumber(target: number): number {
    if (target < 0) return reachNumber(-target);
    let res = 0;
    for (let i = 1; i < 0x3f3f3f3f; i++) {
        res += i;
        if (res === target) return i;
        if (res > target && !((res - target) & 1))
            return i;
    }
    return 0;
};
// @lc code=end

