var orangesRotting = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let queue = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j, 0]);
            }
        }
    }
    let maxMinutes = 0;
    while (queue.length) {
        let [x, y, level] = queue.shift();

        if (x > 0 && grid[x - 1][y] === 1) {
            grid[x - 1][y] = 2;
            queue.push([x - 1, y, level + 1]);
        }
        if (x < m - 1 && grid[x + 1][y] === 1) {
            grid[x + 1][y] = 2;
            queue.push([x + 1, y, level + 1]);
        }
        if (y < n - 1 && grid[x][y + 1] === 1) {
            grid[x][y + 1] = 2;
            queue.push([x, y + 1, level + 1]);
        }
        if (y > 0 && grid[x][y - 1] === 1) {
            grid[x][y - 1] = 2;
            queue.push([x, y - 1, level + 1]);
        }
        maxMinutes = Math.max(level, maxMinutes);
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                return -1;
            }
        }
    }
    return maxMinutes;
};

// TEST CASES =====

// 1. LeetCode Example
console.log("Test 1:",
    orangesRotting([
        [2,1,1],
        [1,1,0],
        [0,1,1]
    ])
);
// Expected: 4

// 2. Already all rotten
console.log("Test 2:",
    orangesRotting([
        [2,2],
        [2,2]
    ])
);
// Expected: 0

// 3. No rotten oranges initially → impossible
console.log("Test 3:",
    orangesRotting([
        [1,1,1],
        [1,1,1]
    ])
);
// Expected: -1

// 4. Fresh oranges but isolated by empty cells → impossible
console.log("Test 4:",
    orangesRotting([
        [2,0,1]
    ])
);
// Expected: -1

// 5. Mixed but reachable
console.log("Test 5:",
    orangesRotting([
        [0,2]
    ])
);
// Expected: 0  (nothing to rot)

// 6. Larger grid
console.log("Test 6:",
    orangesRotting([
        [1,2,1,1],
        [1,1,1,1],
        [0,1,2,1]
    ])
);
// Expected: 2

// 7. Single cell - fresh only
console.log("Test 7:",
    orangesRotting([[1]])
);
// Expected: -1

// 8. Single cell - rotten only
console.log("Test 8:",
    orangesRotting([[2]])
);
// Expected: 0

// 9. Single row
console.log("Test 9:",
    orangesRotting([[2,1,1,0,1,1]])
);
// Expected: 4

// 10. Single column
console.log("Test 10:",
    orangesRotting([
        [2],
        [1],
        [1],
        [1]
    ])
);
// Expected: 3