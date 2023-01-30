/*
 * @lc app=leetcode id=1234 lang=typescript
 *
 * [1234] Replace the Substring for Balanced String
 */

// @lc code=start
function balancedString(s: string): number {
    const n = s.length;
    const avg = n / 4;
    const map: any = { Q: 0, W: 0, E: 0, R: 0 };
    for (const c of s) {
        map[c]++;
    }
    if (map.Q === avg && map.W === avg && map.E === avg && map.R === avg) {
        return 0;
    }
    let minLength = n,
        slow = 0,
        fast = 0;
    while (fast < n) {
        const cur = s[fast];
        map[cur]--;
        while (
            slow <= fast &&
            map.Q <= avg &&
            map.W <= avg &&
            map.E <= avg &&
            map.R <= avg
        ) {
            minLength = Math.min(minLength, fast - slow + 1);
            const slowChar = s[slow];
            map[slowChar]++;
            slow++;
        }
        fast++;
    }
    return minLength;
}
// @lc code=end

