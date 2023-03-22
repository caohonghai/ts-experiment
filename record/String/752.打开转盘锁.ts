/**
 * @rating 1878
 * @type BFS
 */
function openLock(deadends: string[], target: string): number {
    let deadendsSet = new Set(deadends); // 验证死亡数字
    let visited = new Set(['0000']); // 记录走过的路径防止走回头路
    let queue1 = new Set(['0000']); // 起点出发
    let queue2 = new Set([target]); // 终点出发
    let step = 0; // 记录旋转次数

    // 向上转动一位
    const up = (s: string, j: number) => {
        let ch = s.split('');
        if (ch[j] === '9') {
            ch[j] = '0';
        } else {
            ch[j] = parseInt(ch[j]) + 1 + '';
        }
        return ch.join('');
    };

    // 向下旋转一位
    const down = (s: string, j: number) => {
        let ch = s.split('');
        if (ch[j] === '0') {
            ch[j] = '9';
        } else {
            ch[j] = parseInt(ch[j]) - 1 + '';
        }
        return ch.join('');
    };

    const bfs = () => {
        while (queue1.size > 0 && queue2.size > 0) {
            // 用于后续遍历queue2时候替换queue1进行遍历
            let temp: Set<string> = new Set();

            // queue1的节点向周围扩散
            for (let cur of queue1) {
                //如果死亡数字则跳过
                if (deadendsSet.has(cur)) {
                    continue;
                }

                // queue2和queue1有交集说明遍历完成
                if (queue2.has(cur)) {
                    return step;
                }
                // 记录路径
                visited.add(cur);
                // 加入相邻节点
                for (let j = 0; j < 4; j++) {
                    // 向上向下转动
                    let upOnce = up(cur, j);
                    if (!visited.has(upOnce)) {
                        temp.add(upOnce);
                    }

                    let downOnce = down(cur, j);
                    if (!visited.has(downOnce)) {
                        temp.add(downOnce);
                    }
                }
            }
            step++;
            // temp相当于q1，交换q2后继续while遍历
            queue1 = queue2;
            queue2 = temp;
        }

        return -1;
    };

    return bfs();
}
