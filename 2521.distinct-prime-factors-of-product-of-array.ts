/*
 * @lc app=leetcode id=2521 lang=typescript
 *
 * [2521] Distinct Prime Factors of Product of Array
 */

// @lc code=start
function distinctPrimeFactors(nums: number[]): number {
    const st: Set<number> = new Set();
    const prime = (num: number): void => {
        for (let i = 2; i <= num; i++) {
            while (num % i == 0) {
                st.add(i);
                num /= i;
            }
        }
    };
    nums.forEach(num => {
        prime(num);
    });
    return st.size;
}
// @lc code=end
