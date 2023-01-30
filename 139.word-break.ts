/*
 * @lc app=leetcode id=139 lang=typescript
 *
 * [139] 单词拆分
 */

// @lc code=start
function wordBreak(s: string, wordDict: string[]): boolean {
    let len = s.length;
    let f = new Array(len + 1).fill(false);
    let words: Set<string> = new Set(wordDict);
    f[0] = true;
    for (let i = 0; i <= len; i++) {
        for (let j = i; j >= 1 && !f[i]; j--) {
            if (words.has(s.slice(j - 1, i))) {
                f[i] = f[j - 1];
            }
        }
    }
    return f[len];
};
// @lc code=end

