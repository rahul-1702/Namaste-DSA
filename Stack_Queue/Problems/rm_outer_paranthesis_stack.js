var removeOuterParentheses = function(s) {
    let stack = [];
    let ans = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            // before pushing, check depth
            if (stack.length > 0) ans += s[i];
            stack.push('(');
        } else {
            stack.pop();
            // after popping, check depth
            if (stack.length > 0) ans += s[i];
        }
    }
    return ans;
};

console.log(removeOuterParentheses("(()())(())")); 
// Output: "()()()"

console.log(removeOuterParentheses("(()())(())(()(()))")); 
// Output: "()()()()(())"

console.log(removeOuterParentheses("()()")); 
// Output: ""