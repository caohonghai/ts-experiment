/*
 * @lc app=leetcode id=1252 lang=typescript
 *
 * [1252] Cells with Odd Values in a Matrix
 */

// @lc code=start
function oddCells(m: number, n: number, indices: number[][]): number {
    let res = 0;
    // O(n + m) space
    let _m: number[] = new Array(m).fill(0),
        _n: number[] = new Array(n).fill(0);
    // O(indices) time
    for (const [r, c] of indices) {
        _m[r] ^= 1;
        _n[c] ^= 1;
    }
    let _m1 = 0,
        _m2 = 0;
    let _n1 = 0,
        _n2 = 0;
    // O(m) time
    for (let i = 0; i < _m.length; i++) {
        if (_m[i] & 1) _m1++;
        else _m2++;
    }
    // O(n) time
    for (let i = 0; i < _n.length; i++) {
        if (_n[i] & 1) _n1++;
        else _n2++;
    }
    return _m1 * _n2 + _m2 * _n1;
}
// @lc code=end
