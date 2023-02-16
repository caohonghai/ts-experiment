/*
 * @lc app=leetcode id=1145 lang=typescript
 *
 * [1145] Binary Tree Coloring Game
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function btreeGameWinningMove(
    root: TreeNode | null,
    n: number,
    x: number,
): boolean {
    let ans = 0;
    const dfs = (root: TreeNode | null, x: number): number => {
        if (!root) return 0;
        if (root.val === x) {
            let left: number = dfs(root.left, x);
            let right: number = dfs(root.right, x);
            ans = Math.max(ans, left, right, n - left - right - 1);
            return left + right + 1;
        } else return dfs(root.left, x) + dfs(root.right, x) + 1;
    };
    dfs(root, x);
    return ans > n - ans;
}
// @lc code=end
