/*
 * @lc app=leetcode id=2325 lang=typescript
 *
 * [2325] Decode the Message
 */

// @lc code=start
function decodeMessage(key: string, message: string): string {
    const mp: Map<string, string> = new Map();
    let base: number = 97;
    for (const c of key) {
        if (c === ' ') continue;
        if (!mp.has(c)) {
            mp.set(c, String.fromCharCode(base++));
        }
    }
    let ans: string = '';
    for (const c of message) {
        if (c === ' ') {
            ans += c;
            continue;
        }
        ans += mp.get(c);
    }
    return ans;
}
// @lc code=end
