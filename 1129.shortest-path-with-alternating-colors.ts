/*
 * @lc app=leetcode id=1129 lang=typescript
 *
 * [1129] Shortest Path with Alternating Colors
 */

// @lc code=start
type Graph = {
    point: number;
    color: number;
};

function shortestAlternatingPaths(
    n: number,
    redEdges: number[][],
    blueEdges: number[][],
): number[] {
    const g: Array<Array<Graph>> = new Array(n)
        .fill(null)
        .map(_ => new Array());
    for (const p of redEdges) g[p[0]].push({ point: p[1], color: 0 });
    for (const p of blueEdges) g[p[0]].push({ point: p[1], color: 1 });

    const dist: Array<Array<number>> = new Array(n)
        .fill(null)
        .map(_ => new Array(2).fill(Number.MAX_SAFE_INTEGER));
    dist[0][0] = dist[0][1] = 0;

    const q: Array<Graph> = new Array(1e5).fill(null);
    let hh = 0,
        tt = -1;
    q[++tt] = {
        point: 0,
        color: 0,
    };
    q[++tt] = {
        point: 0,
        color: 1,
    };
    while (hh <= tt) {
        const t: Graph = q[hh++];
        for (const p of g[t.point]) {
            if (
                t.color !== p.color &&
                dist[p.point][p.color] > dist[t.point][t.color] + 1
            ) {
                dist[p.point][p.color] = dist[t.point][t.color] + 1;
                q[++tt] = p;
            }
        }
    }
    const res: Array<number> = [];
    for (let i = 0; i < n; i++) {
        res.push(Math.min(dist[i][0], dist[i][1]));
        if (res[i] === Number.MAX_SAFE_INTEGER) res[i] = -1;
    }
    return res;
}
// @lc code=end
