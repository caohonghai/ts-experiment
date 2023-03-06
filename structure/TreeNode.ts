import { Queue } from './Queue';
/**
 * TreeNode 主要是在 LC 中比较常见，该数据数据结构主要用于调试 LC 程序
 */
export class TreeNode<T = any> {
    val: T;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: T, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val!;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

/**
 * @description 项目里面自动引入了 Queue 如果单独运行主要拷贝 Queue
 * @param nums 需要建树的数组
 * @returns 返回树
 */
const build = (nums: unknown[]): TreeNode => {
    const node = new TreeNode(nums[0]!);
    let queue: Queue<TreeNode> = new Queue();
    queue.push(node);
    let idx = 1;
    while (!queue.isEmpty() && idx < nums.length) {
        let head: TreeNode = queue.pop() as TreeNode;
        if (nums[idx] !== null) {
            head.left = new TreeNode(nums[idx]!);
            queue.push(head.left);
        }
        idx++;
        if (nums[idx] !== null) {
            head.right = new TreeNode(nums[idx]!);
            queue.push(head.right);
        }
        idx++;
    }
    return node;
};

let root = ['a', 'b', 'c'];
// let root = [1, 3, 4, 2, null, 6, 5, null, null, null, null, null, 7];

console.log(build(root));
