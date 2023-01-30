/*
 * @lc app=leetcode id=784 lang=typescript
 *
 * [784] 字母大小写全排列
 */

// @lc code=start
function letterCasePermutation(s: string): string[] {
    let res: string[] = [];
    let len = s.length;
    let str = Array.from(s);
    const isAlpha = (c: string): boolean => {
        return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
    }
    const dfs = (s: string[], cur: number): void => {
        if (cur === len) {
            res.push(s.join(''));
            return;
        }
        if (!isAlpha(s[cur])) {
            dfs(s, cur + 1);
            return;
        } else {
            dfs(s, cur + 1);
            s[cur] = s[cur] >= 'a' && s[cur] <= 'z' ? s[cur].toUpperCase() : s[cur].toLowerCase();
            dfs(s, cur + 1);
        }
    }
    dfs(str, 0);
    return res;
}
// @lc code=end
