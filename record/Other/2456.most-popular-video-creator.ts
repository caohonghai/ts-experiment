/*
 * @lc app=leetcode id=2456 lang=typescript
 *
 * [2456] Most Popular Video Creator
 */

// @lc code=start
interface data {
    total: number;
    max: number;
    maxId: string;
}
function mostPopularCreator(
    creators: string[],
    ids: string[],
    views: number[],
): string[][] {
    let mp: Map<string, data> = new Map();
    let n = creators.length;
    let _max = -Infinity,
        _name: string[] = [];
    // iterator
    for (let i = 0; i < n; i++) {
        let creator = creators[i],
            id = ids[i],
            view = views[i];
        let total = (mp.get(creator)?.total ?? 0) + view;
        let max = mp.get(creator)?.max ?? 0;
        let maxId: string = mp.get(creator)?.maxId || id;
        if (max < view) {
            max = view;
            maxId = id;
        } else if (max === view && id < maxId) {
            maxId = id;
        }
        mp.set(creator, { total, max, maxId });
        // find max of views;
        if (_max < total) {
            _max = total;
            _name = [creator];
        } else if (_max === total) {
            _name.push(creator);
        }
    }
    let st: Set<string> = new Set();
    return _name
        .map(item => {
            if (st.has(item)) return;
            st.add(item);
            let res: string[] = [];
            res.push(item, mp.get(item)?.maxId || '');
            return res;
        })
        .filter(item => item) as string[][];
}
// @lc code=end
