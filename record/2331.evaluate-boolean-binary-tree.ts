/*
 * @lc app=leetcode id=2331 lang=typescript
 *
 * [2331] Evaluate Boolean Binary Tree
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

function evaluateTree(root: TreeNode | null): boolean {
    const dfs = (root: TreeNode | null): boolean => {
        if (root?.left === null && root.right === null) return root.val === 1;
        if (root?.val === 2) {
            return dfs(root.left) || dfs(root.right);
        } else {
            return dfs(root!.left) && dfs(root!.right);
        }
    };
    return dfs(root);
}
// @lc code=end
