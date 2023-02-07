/*
 * @lc app=leetcode id=1604 lang=typescript
 *
 * [1604] Alert Using Same Key-Card Three or More Times in a One Hour Period
 */

// @lc code=start
function alertNames(keyName: string[], keyTime: string[]): string[] {
    const transformTime = (time: string): number => {
        return +time.slice(0, 2) * 60 + +time.slice(3, 5);
    };

    const mp: Map<string, number[]> = new Map();
    keyName.forEach((item, idx) => {
        const arr = mp.get(item) || [];
        arr.push(transformTime(keyTime[idx]));
        mp.set(item, arr);
    });
    const ans: string[] = [];
    for (const [k, v] of mp) {
        v.sort((a, b) => a - b);
        for (let i = 0; i < v.length - 2; i++) {
            if (v[i + 2] - v[i] <= 60 && v[i + 2] > v[i]) {
                ans.push(k);
                break;
            }
        }
    }
    return ans.sort();
}
// @lc code=end
