/*
 * @lc app=leetcode id=40 lang=typescript
 *
 * [40] Combination Sum II
 */

// @lc code=start
function combinationSum2(candidates: number[], target: number): number[][] {
    const res: Array<Array<number>> = [];
    const path: Array<number> = [];
    candidates.sort((a, b) => a - b);
    const dfs = (start: number, target: number): void => {
        if (target === 0) {
            res.push([...path]);
        }
        for (
            let i = start;
            i < candidates.length && target - candidates[i] >= 0;
            i++
        ) {
            if (i > start && candidates[i] == candidates[i - 1]) continue;
            path.push(candidates[i]);
            dfs(i + 1, target - candidates[i]);
            path.pop();
        }
    };
    dfs(0, target);
    return res;
}
// @lc code=end

// console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
// console.log(combinationSum2([2, 5, 2, 1, 2], 5));

function combinationSum2_TLE(candidates: number[], target: number): number[][] {
    candidates.sort((a, b) => a - b);
    const set: Set<string> = new Set();
    const dfs = (idx: number, nums: number[], sum: number): void => {
        if (idx >= candidates.length) return;
        if (target === sum) {
            set.add(nums.toString());
            return;
        }
        if (sum > target) return;
        for (let i = idx + 1; i < candidates.length; i++) {
            nums.push(candidates[i]);
            dfs(i, nums, sum + candidates[i]);
            nums.pop();
        }
    };
    for (let i = 0; i < candidates.length; i++) {
        dfs(i, [candidates[i]], candidates[i]);
    }
    return [...set].map(item => item.split(',').map(n => Number(n)));
}
