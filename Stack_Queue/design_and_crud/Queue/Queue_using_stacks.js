var MyQueue = function() {
    this.s1 = [];
    this.s2 = [];
};

MyQueue.prototype.push = function(x) {
    this.s1.push(x);
};

MyQueue.prototype.pop = function() {
    if(this.s2.length === 0) {
        while(this.s1.length) {
            this.s2.push(this.s1.pop());
        }
    }
    return this.s2.pop();
};

MyQueue.prototype.peek = function() {
        if(this.s2.length === 0) {
        while(this.s1.length) {
            this.s2.push(this.s1.pop());
        }
    }
    return this.s2[this.s2.length-1];
    
};

MyQueue.prototype.empty = function() {
    return this.s1.length === 0 && this.s2.length === 0;
};

const q = new MyQueue();

q.push(10);
q.push(30);

console.log(q.peek()); // 👉 10 (front element)
console.log(q.pop());  // 👉 10
console.log(q.peek()); // 👉 30
console.log(q.pop());  // 👉 30
console.log(q.empty()); // 👉 true

