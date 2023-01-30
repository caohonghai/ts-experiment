/*
 * @lc app=leetcode id=2522 lang=typescript
 *
 * [2522] Partition String Into Substrings With Values at Most K
 */

// @lc code=start
function minimumPartition(s: string, k: number): number {
    for (let i = 0; i < s.length; i++) {
        if (Number(s[i]) > k) {
            return -1;
        }
    }
    let ans = 0;
    s += '0';
    for (let i = 0; i < s.length - 1; i++) {
        for (let j = i + 1; j < s.length; j++) {
            if (Number(s.slice(i, j)) <= k) {
                continue;
            } else {
                i = j - 1;
                ans++;
            }
        }
    }
    return ans + 1;
}
// @lc code=end
