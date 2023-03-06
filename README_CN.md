[Read in EN](./README.md)

# 介绍

这个 repository 主要用来记录我的 leetcode 习题、算法模版以及其他相关的练习。

> 您可以提交 PR 并与我们分享您更好的代码（请使用 JavaScript/TypeScript）

# 格式化

提交代码时，需要使用统一的**prettier**规则进行代码格式化。 批量格式化代码，可以执行`npx prettier --write .`

# 数据结构

在 TypeScript 中，没有内置常见数据结构的实现，例如队列和堆栈。 所以我们在`structure`目录下提供了一些数据结构的实用类，方便我在解决问题的时候使用。

## 堆

已使用两种方法来实现 **Stack** 数据结构。一种方法是通过数组，另一种是通过哈希表。目的是为了能够在 `O(1)` 的时间复杂度内判断一个元素是否存在于栈中。

[view the code](./structure/Stack.ts)

# 目录介绍

计划更新存储库以使用 TS 项目。 不同的目录代表不同的内容，例如：

| 目录       | 文摘                          |
| ---------- | ----------------------------- |
| record     | leetcode 题目集               |
| structure  | TypeScript 相关数据自定义结构 |
| experiment | 常见问题的实验                |
| utils      | 一些常用的工具                |

另外，项目连接 jest code 单元测试。 jest 相关的内容可以详细查看[jestjs.io](https://jestjs.io/docs/getting-started)。
