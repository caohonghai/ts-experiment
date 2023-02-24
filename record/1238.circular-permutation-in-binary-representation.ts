/*
 * @lc app=leetcode id=1238 lang=typescript
 *
 * [1238] Circular Permutation in Binary Representation
 */

// @lc code=start
function circularPermutation(n: number, start: number): number[] {
    const targetLength = 1 << n;
    let ret: string[] = ['0', '1'];
    while (ret.length < targetLength) {
        const left = ret.map(str => `0${str}`);
        const right = ret.reverse().map(str => `1${str}`);
        ret = [...left, ...right];
    }
    const nums = ret.map(t => parseInt(t, 2));
    const index = nums.findIndex(t => t === start);
    return [...nums.slice(index), ...nums.slice(0, index)];
}
// @lc code=end
