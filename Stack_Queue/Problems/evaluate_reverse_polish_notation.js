// Evaluate Reverse Polish Notation

var evalRPN = function(arr) {
    let stack = [];
    const map = {
        "+": (a,b) => (b+a),
        "*": (a,b) => (b*a),
        "-": (a,b) => (b-a),
        "/": (a,b) => Math.trunc(b/a),
    };
        for(let i=0; i < arr.length; i++){
            if(map[arr[i]]) {
                let a = stack.pop();
                let b = stack.pop();
                let ans = map[arr[i]](+a,+b);
                stack.push(ans);
            } else {
                stack.push(arr[i]) 
            }
        }
    return Number(stack.pop());
};

// ✅ Test Cases
console.log(evalRPN(["2", "1", "+", "3", "*"]));    
// (2 + 1) * 3 = 9

console.log(evalRPN(["4", "13", "5", "/", "+"]));   
// 13 / 5 = 2 (truncated), so 4 + 2 = 6

console.log(evalRPN(["3", "11", "+", "5", "-"]));   
// (3 + 11) - 5 = 9

console.log(evalRPN(["5", "1", "2", "+", "4", "*", "+", "3", "-"]));  
// 5 + ((1 + 2) * 4) - 3 = 14