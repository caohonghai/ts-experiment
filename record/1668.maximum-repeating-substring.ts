/*
 * @lc app=leetcode id=1668 lang=typescript
 *
 * [1668] Maximum Repeating Substring
 */

// @lc code=start
/**
 * @Author: Acckno1
 * @Date: 2022/11/02 19:51:50
 * @Description: 可以用二分来进行优化
 */
function maxRepeating(sequence: string, word: string): number {
    let res = 0,
        str = word;
    while (sequence.includes(str)) {
        res++;
        str = str.concat(word);
    }
    return res;
}
// @lc code=end
