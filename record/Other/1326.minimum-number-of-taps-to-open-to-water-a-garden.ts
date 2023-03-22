/*
 * @lc app=leetcode id=1326 lang=typescript
 *
 * [1326] Minimum Number of Taps to Open to Water a Garden
 */

// @lc code=start
interface Distance {
    start: number;
    end: number;
}
function minTaps(n: number, ranges: number[]): number {
    const arr: Distance[] = [];
    for (let i = 0; i < ranges.length; i++) {
        arr.push({ start: i - ranges[i], end: i + ranges[i] });
    }
    arr.sort((a, b) => {
        if (a.start !== b.start) return a.start - b.start;
        return a.end - b.end;
    });
    let res = 0,
        r = 0;
    for (let i = 0; i < arr.length; i++) {
        let j = i,
            _r = -1;
        while (j < arr.length && arr[j].start <= r)
            _r = Math.max(_r, arr[j++].end);
        if (_r === -1) return -1;
        res++;
        if (_r >= n) return res;
        r = _r;
        i = j - 1;
    }
    return -1;
}
// @lc code=end
