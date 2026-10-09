// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    const n = A.length;
    let sum = 0;
    for(let i=0; i<n; i++) {
        sum += A[i];
    }
    let prefixSum = A[0];
    let min = Infinity;
    for(let i = 1; i<n;i++) {
        let condition = Math.abs(prefixSum - (sum - prefixSum));
        if(min > condition) {
            min = condition
        }
        prefixSum += A[i];
    }
    return min;
}
