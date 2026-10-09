function solution(A) {
    // Implement your solution here
    const n = A.length;
    const seen = new Array(n+1).fill(false);

    for(const a of A) {
        if(a > n || seen[a] ) return 0;
        seen[a] = true;
    }

    return 1;
}
