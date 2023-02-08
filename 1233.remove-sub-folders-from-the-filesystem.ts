/*
 * @lc app=leetcode id=1233 lang=typescript
 *
 * [1233] Remove Sub-Folders from the Filesystem
 */

// @lc code=start
function removeSubfolders(folder: string[]): string[] {
    folder.sort();
    let res: string[] = [folder[0]];
    for (let i = 1; i < folder.length; i++) {
        const back = res[res.length - 1];
        if (
            folder[i].length <= back.length ||
            !(
                folder[i].startsWith(back) &&
                folder[i].charAt(back.length) === '/'
            )
        )
            res.push(folder[i]);
    }
    return res;
}
class TrieNode {
    private map: Map<string, TrieNode>;

    constructor(public ref: number = -1) {
        this.map = new Map<string, TrieNode>();
    }

    get(key: string) {
        return this.map.get(key);
    }

    set(key: string, value: TrieNode) {
        return this.map.set(key, value);
    }

    getChildren() {
        return Array.from(this.map.values());
    }
}

/**
 * 字典树做法
 * @param folder
 * @returns
 */
function removeSubfolders_2(folder: string[]): string[] {
    const root = new TrieNode();

    const n = folder.length;
    for (let i = 0; i < n; i++) {
        const path = folder[i].slice(1).split('/');
        let cur = root;
        for (const name of path) {
            let node = cur.get(name);
            if (node === undefined) {
                cur.set(name, (node = new TrieNode()));
            }
            cur = node;
        }
        cur.ref = i;
    }

    const ans: string[] = [];
    const dfs = (node: TrieNode) => {
        if (node.ref !== -1) {
            ans.push(folder[node.ref]);
            return;
        }

        const children = node.getChildren();
        if (children.length) {
            for (const child of children) {
                dfs(child);
            }
        }
    };

    return dfs(root), ans;
}
// @lc code=end
