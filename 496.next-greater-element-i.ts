/*
 * @lc app=leetcode id=496 lang=typescript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    // O(nums1.length + nums2.length)
    let mp: Map<number, number> = new Map();
    let stack: number[] = [];
    for (let i = nums2.length - 1; i >= 0; i--) {
        while (stack.length !== 0 && nums2[i] >= stack[stack.length - 1]) {
            stack.pop();
        }
        if (stack.length === 0) mp.set(nums2[i], -1);
        else mp.set(nums2[i], stack[stack.length - 1]);
        stack.push(nums2[i]);
    }
    let res: number[] = [];
    nums1.map(i => res.push(mp.get(i) || -1))
    return res;
};
// @lc code=end

