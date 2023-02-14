/*
 * @lc app=leetcode id=1124 lang=typescript
 *
 * [1124] Longest Well-Performing Interval
 */

// @lc code=start
function longestWPI(hours: number[]): number {
    if (!hours) {
        return 0;
    }
    const list: number[] = hours.map(v => (v > 8 ? 1 : -1));
    const presumList: number[] = [0];
    let sum = 0;
    for (let i of list) {
        sum += i;
        presumList.push(sum);
    }
    let min = 0;
    let increaseStacks: number[] = [0];
    presumList.forEach((v, index) => {
        if (v < min) {
            increaseStacks.push(index);
            min = v;
        }
    });
    let max = 0;
    for (let i = presumList.length - 1; i >= 0; i--) {
        while (
            increaseStacks.length &&
            presumList[i] -
                presumList[increaseStacks[increaseStacks.length - 1]] >
                0
        ) {
            max = Math.max(max, i - increaseStacks[increaseStacks.length - 1]);
            increaseStacks.pop();
        }
    }
    return max;
}
// @lc code=end
