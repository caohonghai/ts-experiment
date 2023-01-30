/*
 * @lc app=leetcode id=2523 lang=typescript
 *
 * [2523] Closest Prime Numbers in Range
 */

// @lc code=start
function closestPrimes(left: number, right: number): number[] {
    const primes: number[] = new Array(1e6 + 10);
    let cnt: number = 0;
    const st: boolean[] = new Array(1e6 + 10).fill(false);
    const getPrime = (n: number): void => {
        for (let i = 2; i <= n; i++) {
            if (st[i]) continue;
            primes[cnt++] = i;
            for (let j = i + i; j <= n; j += i) {
                st[j] = true;
            }
        }
    };
    getPrime(1e6 + 5);
    let li: number = 0;
    for (; li < 1e6; li++) {
        if (primes[li] >= left) {
            break;
        }
    }
    let pre: number = primes[li++],
        diff: number = Infinity;
    let ans: number[] = [-1, -1];
    while (primes[li] <= right) {
        if (primes[li] - pre < diff) {
            diff = primes[li] - pre;
            ans = [pre, primes[li]];
        }
        pre = primes[li++];
    }
    return ans;
}
// @lc code=end
