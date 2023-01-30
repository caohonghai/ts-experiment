/*
 * @lc app=leetcode id=1106 lang=typescript
 *
 * [1106] Parsing A Boolean Expression
 */

// @lc code=start
function parseBoolExpr(expression: string): boolean {
    let s: string[] = expression.split('');
    let stack: string[] = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ')' && s[i] !== ',') {
            stack.push(s[i]);
            continue;
        }
        if (s[i] === ',') continue;
        const back = stack[stack.length - 1] === 't' ? true : false;
        let _and = back, _or = back, _not = !back;
        stack.pop();
        while (stack.length && stack[stack.length - 1] !== '(') {
            const back = stack[stack.length - 1] === 't' ? true : false;
            _and = _and && back; _or = _or || back;
            stack.pop();
        }
        stack.pop();
        switch (stack[stack.length - 1]) {
            case '&':
                stack.pop();
                stack.push(_and ? 't' : 'f');
                break;
            case '|':
                stack.pop();
                stack.push(_or ? 't' : 'f');
                break;
            case '!':
                stack.pop();
                stack.push(_not ? 't' : 'f');
                break;
        }
    }
    return stack[0] === 't' ? true : false;
};
// @lc code=end

