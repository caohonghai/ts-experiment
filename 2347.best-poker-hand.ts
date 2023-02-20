/*
 * @lc app=leetcode id=2347 lang=typescript
 *
 * [2347] Best Poker Hand
 */

// @lc code=start
function bestHand(ranks: number[], suits: string[]): string {
    let ans = 'High Card';
    const cnt = new Array(14).fill(0);
    ranks.forEach(item => cnt[item]++);
    cnt.forEach(item => {
        if (item >= 2 && ans !== 'Three of a Kind') ans = 'Pair';
        if (item >= 3) ans = 'Three of a Kind';
    });
    if (new Set(suits).size === 1) ans = 'Flush';
    return ans;
}
// @lc code=end
