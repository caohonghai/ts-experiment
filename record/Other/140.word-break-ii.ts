/*
 * @lc app=leetcode id=140 lang=typescript
 *
 * [140] 单词拆分 II
 */

// @lc code=start
interface Item {
    pre: number;
    next: number;
    res: string;
}
// 参考139题
// Tips:
// 1. 先通过动态规划判断是否存在这样的分割方式，同时记录下当前索引可以，通过多少种方法来分割
// 2. 采用Hash来记录路径
// 3. DFS或BFS来搜索记录下来路径
function _wordBreak(s: string, wordDict: string[]): string[] {
    const len = s.length;
    let f = new Array(len + 1).fill(-1);
    let words: Set<string> = new Set(wordDict);
    let mp: Map<number, number[]> = new Map();
    f[0] = 0;
    for (let i = 0; i <= len; i++) {
        for (let j = i; j >= 1; j--) {
            if (words.has(s.slice(j - 1, i))) {
                f[i] = j - 1;
                const arr = mp.get(j - 1) ?? [];
                arr.push(i);
                mp.set(j - 1, arr);
            }
        }
    }
    if (f[len] === -1) return [];
    let ans: string[] = [];
    const bfs = (): void => {
        let queue: Item[] = new Array(1e4);
        let hh = 0,
            tt = -1;
        queue[++tt] = { pre: -1, next: 0, res: '' };
        while (hh <= tt) {
            const { pre, next, res } = queue[hh++];
            const arr = mp.get(next);
            if (next === len) ans.push(res + s.slice(pre, next));
            arr?.forEach(n => {
                queue[++tt] = {
                    pre: next,
                    next: n,
                    res: pre === -1 ? '' : res + s.slice(pre, next) + ' ',
                };
            });
        }
    };
    bfs();
    return ans;
}
// @lc code=end
