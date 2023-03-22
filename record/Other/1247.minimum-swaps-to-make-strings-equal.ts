/*
 * @lc app=leetcode id=1247 lang=typescript
 *
 * [1247] Minimum Swaps to Make Strings Equal
 */

// @lc code=start
// 1.若x和y都为偶数
// 例如：
// XX YY YY
// YY XX XX 就会进行(x+y)/2次交换，如示例一
// +1 +1 +1

// 2.若x和y都为奇数
// XX X YYYY Y
// YY Y XXXX X 就会进行(x-1)/2+(y-1)/2+2=(x+y)/2+1
//    |______|
//      相连

// 二者均可写作(x+1)/2+(y+1)/2;
function minimumSwap(s1: string, s2: string): number {
    let arr1 = s1.split(''),
        arr2 = s2.split('');
    let x = 0,
        y = 0,
        n = s1.length;
    for (let i = 0; i < n; i++) {
        if (arr1[i] !== arr2[i]) {
            if (arr1[i] === 'x') x++;
            else y++;
        }
    }
    return (x + y) & 1 ? -1 : Math.floor((x + 1) / 2) + Math.floor((y + 1) / 2);
}

// @lc code=end
