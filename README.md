# Introduce

This repository is mainly used to record my leetcode exercises

> You can submit a PR and share your better code with us (please use JavaScript/TypeScript)

# Format

When submitting code, you need to use the unified **prettier** rules for code formatting. For code formatting in batches, you can execute `npx prettier --write .`

# Data Structure

In TypeScript, there are no built-in implementations of common data structures such as queues and stacks. Therefore, we have provided some utility classes for data structures in the `structure` directory, which make it easy for me to use them when solving problems.

## Stack

Two methods have been used to implement the **Stack** data structure. One method is through arrays, and the other is through hash tables. The purpose is to be able to determine whether an element exists in the stack in `O(1)` time complexity.

[view the code](./structure/Stack.ts)

It is planned to update the warehouse to use a TS project. Different directories represent different content, for example:

| Contents   | Contents                                 |
| ---------- | ---------------------------------------- |
| record     | leetcode topic collection                |
| structure  | TypeScript related data custom structure |
| experiment | Experiments with common problems         |

In addition, the project is connected to the jest code unit test. For jest-related content, you can view it in detail [jestjs.io](https://jestjs.io/docs/getting-started)。
