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
        if (folder[i].length <= back.length || !(folder[i].startsWith(back) && folder[i].charAt(back.length) === '/'))
            res.push(folder[i]);
    }
    return res;
};
// @lc code=end

