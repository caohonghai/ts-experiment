/*
 * @Date: 2023-03-06 22:07:05
 * @Author: Acckno1
 * @LastEditTime: 2023-03-06 22:07:07
 * @Description: 
 */
// 因为二叉搜索树是有序排列的树，所以需要有个比较大小的方法
export enum Compare {
    LESS_THAN = -1,
    BIGGER_THAN = 1,
    EQUALS = 0,
}

// 规定自定义Compare的类型
export type ICompareFunction<T> = (a: T, b: T) => number;

/**
 * @description: 默认的大小比较函数
 * @param {T} a
 * @param {T} b
 * @return {Compare} 返回 -1 0 1 代表 小于 等于 大于
 */
export function defaultCompare<T>(a: T, b: T): Compare {
    if (a === b) {
        return Compare.EQUALS;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}
