/*
 * @lc app=leetcode id=1138 lang=typescript
 *
 * [1138] Alphabet Board Path
 */

// @lc code=start
interface Queue {
    position: number[];
    result: string;
}
function alphabetBoardPath(target: string): string {
    const dist: number[][] = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];
    const mp: string[] = ['R', 'L', 'D', 'U'];
    const board: string[][] = [
        'abcde',
        'fghij',
        'klmno',
        'pqrst',
        'uvwxy',
        'z',
    ].map(item => item.split(''));
    const check = (dx: number, dy: number): boolean => {
        return (
            dx >= 0 && dy >= 0 && ((dx === 5 && dy < 1) || (dx <= 4 && dy <= 4))
        );
    };
    const bfs = (position: number[], target: string, result: string): Queue => {
        const st: boolean[][] = new Array(6)
            .fill(false)
            .map(_ => new Array(6).fill(false));
        const q: Queue[] = new Array(10001).fill(null);
        let hh = 0,
            tt = -1;
        q[++tt] = { position, result };
        while (hh <= tt) {
            const head: Queue = q[hh++];
            const [x, y] = head.position;
            st[x][y] = true;
            if (board[x][y] === target) return head;
            for (let i = 0; i < 4; i++) {
                let dx = x + +dist[i][0],
                    dy = y + +dist[i][1];
                if (check(dx, dy) && !st[dx][dy]) {
                    st[dx][dy] = true;
                    q[++tt] = {
                        position: [dx, dy],
                        result: head.result + mp[i],
                    };
                }
            }
        }
        return { position, result };
    };
    let x = 0,
        y = 0;
    let res = '';
    for (let i = 0; i < target.length; i++) {
        const ret: Queue = bfs([x, y], target[i], res);
        [x, y] = ret.position;
        res = ret.result + '!';
    }
    return res;
}
// @lc code=end
