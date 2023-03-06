import {
    Compare as COMPARE,
    defaultCompare,
    ICompareFunction,
} from '../utils/compare';
import { TreeNode } from './TreeNode';

/**
 * @description: BinarySearchTree 二叉搜索树
 */
export default class BST<T = number> {
    protected root: TreeNode<T> | null;

    constructor(
        protected compareFn: ICompareFunction<T> = defaultCompare,
        root?: TreeNode<T>,
    ) {
        this.root = root === undefined ? null : root;
    }

    /**
     * @description: 插入元素
     * @param {T} key 需要插入的值
     * @return {void}
     */
    insert(key: T): void {
        if (this.root === null) {
            this.root = new TreeNode(key);
        } else {
            this.insertTreeNode(this.root, key);
        }
    }

    /**
     * @description: 删除BST的某个值
     * @param {T} key 删除值
     * @return {*}
     */
    remove(key: T): void {
        this.root = this.removeTreeNode(this.root, key);
    }

    /**
     * @description: 返回树中的最小元素
     * @return {TreeNode<T>}
     */
    min(): TreeNode<T> | null {
        if (this.root !== null) {
            // 调用迭代方法
            return this.minTreeNode(this.root);
        }
        return null;
    }

    /**
     * @description: 返回树中的最大元素
     * @return {TreeNode<T>}
     */
    max(): TreeNode<T> | null {
        if (this.root !== null) {
            // 调用迭代方法
            return this.maxTreeNode(this.root);
        }
        return null;
    }

    /**
     * @description: 内部构建树 插入节点函数
     * @param {TreeNode} node 当前的 node
     * @param {T} key 需要插入的值 key
     * @return {void}
     */
    protected insertTreeNode(node: TreeNode<T>, key: T): void {
        if (this.compareFn(key, node.val) === COMPARE.LESS_THAN) {
            // key 比 node.val 小，走左边
            if (node.left === null) {
                // 如果左节点没有 直接插入进去
                node.left = new TreeNode(key);
            } else {
                // 递归查询
                this.insertTreeNode(node.left, key);
            }
        } else {
            if (node.right === null) {
                node.right = new TreeNode(key);
            } else {
                this.insertTreeNode(node.right, key);
            }
        }
    }

    /**
     * @description: 内部操作树 在指定子树中移除指定元素
     * @return {TreeNode<T> | null} 每次处理完后都需要将处理后的节点返回给本节点
     */
    protected removeTreeNode(
        node: TreeNode<T> | null,
        key: T,
    ): TreeNode<T> | null {
        if (node === null) {
            return null;
        }

        if (this.compareFn(key, node.val) === COMPARE.LESS_THAN) {
            // key 比 node.val 小，走左边
            node.left = this.removeTreeNode(node.left, key);
            return node;
        } else if (this.compareFn(key, node.val) === COMPARE.BIGGER_THAN) {
            node.right = this.removeTreeNode(node.right, key);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                // 需要删除的是叶子结点
                node = null;
                return node;
            } else if (node.left === null) {
                // 当要删除的节点只有一个子节点
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            } else {
                // 当删除的结点有两个子节点
                // 1. 找右子树最小值
                // 2. 最小值替换掉当前节点
                // 3. 删除右子树的最小值
                const minNode = this.minTreeNode(node.right);
                node.val = minNode.val;
                node.right = this.removeTreeNode(node.right, minNode.val);
            }
        }

        return null;
    }

    /**
     * @description: 内部方法 查找当前节点的最小值
     * @param {TreeNode} node 需要查找的节点
     * @return {TreeNode<T>} 返回最小值节点
     */
    protected minTreeNode(node: TreeNode<T>): TreeNode<T> {
        let current = node;
        while (current !== null && current.left !== null)
            current = current.left;
        return current;
    }

    /**
     * @description: 内部方法 查找当前节点的最大值
     * @param {TreeNode} node 需要查找的节点
     * @return {TreeNode<T>} 返回最大值节点
     */
    protected maxTreeNode(node: TreeNode<T>): TreeNode<T> {
        let current = node;
        while (current !== null && current.right !== null)
            current = current.right;
        return current;
    }
}
