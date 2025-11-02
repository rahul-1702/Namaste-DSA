var MyStack = function() {
    this.q = []; 
};
MyStack.prototype.push = function(x) {
    this.q.push(x);
};
MyStack.prototype.pop = function() {
    let n = this.q.length;
    for (let i = 0; i < n - 1; i++) {
        this.q.push(this.q.shift());
    }
    return this.q.shift();
};
MyStack.prototype.top = function() {
    let n = this.q.length;
    for (let i = 0; i < n - 1; i++) {
        this.q.push(this.q.shift());
    }
    let front = this.q.shift();
    this.q.push(front);
    return front;
};
MyStack.prototype.empty = function() {
    return this.q.length === 0;
};

// Create a new stack
const stack = new MyStack();

// Push elements
stack.push(10);
stack.push(20);

console.log(stack.top()); // 👉 20  (top element)
console.log(stack.pop()); // 👉 20  (removes 30)
console.log(stack.top()); // 👉 10
console.log(stack.empty()); // 👉 false
console.log(stack.pop()); // 👉 10
console.log(stack.empty()); // 👉 true