/*
 * @lc app=leetcode id=1235 lang=typescript
 *
 * [1235] Maximum Profit in Job Scheduling
 */

// @lc code=start
function jobScheduling(startTime: number[], endTime: number[], profit: number[]): number {
    const n = startTime.length;
    const list = new Array<Array<number>>();
    for (let i = 0; i < n; i++)
        list.push([startTime[i], endTime[i], profit[i]]);
    list.sort((a, b) => a[1] - b[1]);
    // status expression: f[i] = max(f[i - 1], f[j] + profit[i]) (i >= 1)
    const f = new Array(n + 10).fill(0);
    for (let i = 1; i <= n; i++) {
        const [s, e, p] = list[i - 1];
        f[i] = Math.max(f[i - 1], p);
        // bin-search in order to find the maximum f[j] value;
        let l = 0, r = i - 1;
        while (l < r) {
            let mid = (l + r + 1) >> 1;
            if (list[mid][1] <= s) l = mid;
            else r = mid - 1
        }
        if (list[r][1] <= s) f[i] = Math.max(f[i], f[r + 1] + p);
    }
    return f[n];
};

// @lc code=end

