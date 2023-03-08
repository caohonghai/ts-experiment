import {
    Compare as COMPARE,
    defaultCompare,
    ICompareFunction,
} from '../utils/compare';
import { TreeNode } from './TreeNode';
import BST from './BST';

// 平衡因子枚举
enum BalanceFactor {
    UNBALANCED_RIGHT = -2, // 右重
    SLIGHTLY_UNBALANCED_RIGHT = -1, // 轻微右重
    BALANCED = 0, // 平衡
    SLIGHTLY_UNBALANCED_LEFT = 1, // 轻微左重
    UNBALANCED_LEFT = 2, // 右重
}

// https://oi-wiki.org/ds/avl/
export default class AVL<T> extends BST<T> {
    constructor(protected compareFn: ICompareFunction<T> = defaultCompare) {
        super(compareFn);
    }

    /**
     * @description: 获取节点的高度
     * @param {TreeNode<T> | null} node 当前节点
     * @return {number} 节点高度
     */
    private getNodeHeight(node: TreeNode<T> | null): number {
        if (node === null) return -1;
        return (
            Math.max(
                this.getNodeHeight(node.left),
                this.getNodeHeight(node.right),
            ) + 1
        );
    }

    /**
     * @description: 获取节点的平衡因子枚举
     * @param {TreeNode<T>} node 当前节点
     * @return {BalanceFactor}  平衡因子枚举
     */
    private getBalanceFactor(node: TreeNode<T>): BalanceFactor {
        const diff =
            this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
        switch (diff) {
            case -2:
                return BalanceFactor.UNBALANCED_RIGHT;
            case -1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
            case 1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
            case 2:
                return BalanceFactor.UNBALANCED_LEFT;
            default:
                return BalanceFactor.BALANCED;
        }
    }

    protected insertTreeNode(
        node: TreeNode<T> | null,
        key: T,
    ): TreeNode<T> | null {
        if (node === null) return new TreeNode(key);

        if (this.compareFn(key, node.val) === COMPARE.LESS_THAN) {
            node.left = this.insertTreeNode(node.left, key);
        } else if (this.compareFn(key, node.val) === COMPARE.BIGGER_THAN) {
            node.right = this.insertTreeNode(node.right, key);
        } else {
            return node;
        }
        return this.keepBalance(node);
    }

    protected removeTreeNode(
        node: TreeNode<T> | null,
        key: T,
    ): TreeNode<T> | null {
        if (node === null) return node;

        if (this.compareFn(key, node.val) === COMPARE.LESS_THAN) {
            node.left = this.removeTreeNode(node.left, key);
        } else if (this.compareFn(key, node.val) === COMPARE.BIGGER_THAN) {
            node.right = this.removeTreeNode(node.right, key);
        } else {
            if (node.left === null && node.right === null) {
                node = null;
            } else if (node.left === null && node.right !== null) {
                node = node.right;
            } else if (node.left !== null && node.right === null) {
                node = node.left;
            } else {
                const minNode = this.minTreeNode(node.right as TreeNode);
                node.val = minNode.val;
                node.right = this.removeTreeNode(node.right, minNode.val);
            }
        }
        return this.keepBalance(node);
    }

    /**
     * @description: 对节点为根的树进行两层平衡
     * @param {TreeNode<T> | null} node
     * @return {TreeNode<T> | null} 返回平衡后的以节点为根的树
     */
    keepBalance(node: TreeNode<T> | null): TreeNode<T> | null {
        if (node === null) return node;

        const balance = this.getBalanceFactor(node);

        if (balance === BalanceFactor.UNBALANCED_LEFT) {
            const factor = this.getBalanceFactor(node.left!);
            // 左左情况
            if (
                factor === BalanceFactor.BALANCED ||
                factor === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
            ) {
                return this.rotationLL(node);
            } else if (
                // 左右情况
                factor === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
            ) {
                return this.rotationLR(node);
            }
        } else if (balance === BalanceFactor.UNBALANCED_RIGHT) {
            // 右右情况
            const factor = this.getBalanceFactor(node.right!);
            if (
                factor === BalanceFactor.BALANCED ||
                factor === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
            ) {
                return this.rotationRR(node);
            } else if (factor === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
                // 右左情况
                return this.rotationRL(node);
            }
        }
        return node;
    }

    /**
     * 左侧子节点的高度大于右侧子节点的高度，并且左侧子节点也是平衡或左侧较重的，为左左情况
     *
     *           d                             b
     *          / \                           / \
     *         b   e   -> rotationLL(a) ->   a   d
     *        / \                               / \
     *       a   c                             c   e
     *
     *
     * @description 左左情况 向右单旋转
     * @param {TreeNode<T>} root 旋转前的 `root` 节点
     * @return {TreeNode<T>} 返回旋转后的 `root` 节点 也就是旋转前的 `pivot`
     */
    private rotationLL(root: TreeNode<T>): TreeNode<T> {
        // TODO 能否保证 root.left 不为 null
        const pivot = root.left as TreeNode<T>;
        root.left = pivot.right;
        pivot.right = root;
        return pivot;
    }

    /**
     * 右侧子节点的高度大于左侧子节点的高度，并且右侧子节点也是平衡或右侧较重的，为右右情况
     *
     *           b                             d
     *          / \                           / \
     *         a   d   -> rotationRR(b) ->   b   e
     *            / \                       / \
     *           c   e                     a   c
     *
     * @description 右右情况 向左单旋转
     * @param {TreeNode<T>} root 旋转前的 `root` 节点
     * @return {TreeNode<T>} 返回旋转后的 `root` 节点 也就是旋转前的 `pivot`
     */
    private rotationRR(root: TreeNode<T>): TreeNode<T> {
        const pivot = root.right as TreeNode<T>;
        root.right = pivot.left;
        pivot.left = root;
        return pivot;
    }

    /**
     * 左侧子节点的高度大于右侧子节点的高度，并且左侧子节点右侧较重
     *
     *           f                           f                            d
     *          / \                         / \                         /   \
     *         b   g -> rotationRR(b) ->   d   g -> rotationLL(f) ->   b     f
     *        / \                         / \                         / \   / \
     *       a   d                       b   e                       a   c e   g
     *          / \                     / \
     *         c   e                   a   c
     *
     * @description 左右情况 先左旋左子树后右旋 `root` 节点
     * @param {TreeNode<T>} root 旋转前的 `root` 节点
     * @return {TreeNode<T>} 返回旋转后的 `root` 节点 也就是旋转前的 `pivot`
     */
    private rotationLR(root: TreeNode<T>): TreeNode<T> {
        root.left = this.rotationRR(root.left as TreeNode);
        return this.rotationLL(root);
    }

    /**
     * 右侧子节点的高度大于左侧子节点的高度，并且右侧子节点左侧较重
     *
     *
     *           b                           b                            d
     *          / \                         / \                         /   \
     *         a   f -> rotationLL(c) ->   a   d -> rotationRR(a) ->   b     f
     *            / \                         / \                     / \   / \
     *           d   g                       c   f                   a   c e   g
     *          / \                             / \
     *         c   e                           e   g
     *
     * @description 右左情况 先右旋右子树后左旋 `root` 节点
     * @param {TreeNode<T>} root 旋转前的 `root` 节点
     * @return {TreeNode<T>} 返回旋转后的 `root` 节点 也就是旋转前的 `pivot`
     */
    private rotationRL(root: TreeNode<T>): TreeNode<T> {
        root.right = this.rotationLL(root.right as TreeNode);
        return this.rotationRR(root);
    }
}
