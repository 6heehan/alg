function solution(A) {
    if (A.length === 0) return 0;

    let minPrice = A[0];
    let maxProfit = 0;

    for (const price of A) {
        maxProfit = Math.max(maxProfit, price - minPrice);
        minPrice = Math.min(minPrice, price);
    }

    return maxProfit;
}
