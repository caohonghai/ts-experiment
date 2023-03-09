[Read in CN](./README_CN.md)

# Introduce

This repository is mainly used to record my leetcode exercises, algorithm templates, and other related exercises.

> You can submit a PR and share your better code with us (please use JavaScript/TypeScript)

# Format

When submitting code, you need to use the unified **prettier** rules for code formatting. For code formatting in batches, you can execute `npx prettier --write .`

# Data Structure

In TypeScript, there are no built-in implementations of common data structures such as queues and stacks. Therefore, we have provided some utility classes for data structures in the `structure` directory, which make it easy for me to use them when solving problems.

## Stack

Two methods have been used to implement the **Stack** data structure. One method is through arrays, and the other is through hash tables. The purpose is to be able to determine whether an element exists in the stack in `O(1)` time complexity.

[view the code](./structure/Stack.ts)

| Method Name   | Function                              |
| ------------- | ------------------------------------- |
| push(element) | Insert a new node into the stack      |
| pop()         | Get the top node on the stack and pop |
| peek()        | Get the top node on the stack         |
| isEmpty()     | Determine if the stack is empty       |
| size()        | The number of data in the stack       |
| clear()       | Clear the stack                       |

## BST

[view the code](./structure/BST.ts)

| Method Name         | Function                                       |
| ------------------- | ---------------------------------------------- |
| insert(key)         | Insert a new node into the tree                |
| search(key)         | Find a node in the tree                        |
| remove(key)         | Remove a node from the tree                    |
| min()               | Return the minimum value of a node in the tree |
| max()               | Return the maximum node in the tree            |
| preOrderTraverse()  | Traverse all nodes in pre-order                |
| inOrderTraverse()   | Traverse all nodes in in-order                 |
| postOrderTraverse() | Traverse all nodes in post-order               |

Additional methods:

```ts
preOrderTraverseNode(
    node: TreeNode<T> | null = this.root,
    callback?: (value: T) => {},
): void {
    if (node !== null) {
        if (callback === undefined) {
            console.log(node.val);
        } else {
            callback(node.val);
        }
        this.preOrderTraverseNode(node.left, callback);
        this.preOrderTraverseNode(node.right, callback);
    }
}
```

As you can tell from the code, `preOrderTraverseNode` is passed in as a callback function for the purpose of being able to process a node's information directly.

```ts
const bst = new BST();
bst.insert(5);
bst.insert(3);
bst.insert(4);
bst.insert(2);
bst.preOrderTraverseNode(bst.root, (v: number) => {});
```

## AVL

AVL inherits from BST and prevents BST from going too extreme and degenerating binary trees into chained tables, where the time complexity of the lookup becomes O(N). More can be found at [OI WIKI](https://oi-wiki.org/ds/avl/)

[view the code](./structure/AVL.ts)

```ts
const avl = new AVL();
avl.insert(5);
avl.insert(6);
avl.insert(4);
avl.insert(8);
avl.insert(7);
avl.insert(10);
avl.insert(9);
avl.insert(11);
avl.inOrderTraverseNode();
```

# Catalogue Introduction

It is planned to update the repository to use a TS project. Different directories represent different content, for example:

| Catalogue  | Abstract                                 |
| ---------- | ---------------------------------------- |
| record     | Leetcode topic collection                |
| structure  | TypeScript related data custom structure |
| experiment | Experiments with common problems         |
| utils      | Some commonly used tools                 |

In addition, the project is connected to the jest code unit test. For jest-related content, you can view it in detail [jestjs.io](https://jestjs.io/docs/getting-started)。
