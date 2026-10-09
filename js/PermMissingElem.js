function solution(A) {
    // Implement your solution here
    const n = A.length;
    let answer = 0;
    const sum = ((n+1) * (n+2) ) / 2;
    for(let i = 0; i<n; i++) {
        answer += A[i]
    }
    return sum - answer;
}
