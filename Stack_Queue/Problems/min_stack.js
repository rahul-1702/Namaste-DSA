
var MinStack = function() {
    this.s = [];
};

MinStack.prototype.push = function(val) {
    if(this.s.length === 0){
        this.s.push([val, val]);
    } else {
        let minVal = Math.min(val, this.s[this.s.length - 1][1]);
        this.s.push([val, minVal]);
    }
};

MinStack.prototype.pop = function() {
    this.s.pop();
};

MinStack.prototype.top = function() {
    return this.s[this.s.length-1][0];
};

MinStack.prototype.getMin = function() {
    return this.s[this.s.length-1][1];
};

let minStack = new MinStack();

console.log("Push 5");
minStack.push(5);
console.log("Top:", minStack.top());         // 5
console.log("Min:", minStack.getMin());      // 5

console.log("\nPush 3");
minStack.push(3);
console.log("Top:", minStack.top());         // 3
console.log("Min:", minStack.getMin());      // 3

console.log("\nPush 7");
minStack.push(7);
console.log("Top:", minStack.top());         // 7
console.log("Min:", minStack.getMin());      // 3
