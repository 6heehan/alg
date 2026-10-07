function solution(n, times) {
    let left = 1;
    let right = Math.min(...times) * n;   // 가장 빠른 심사관이 혼자 다 할 때

    let answer = right;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // mid초 동안 처리 가능한 인원
        let count = 0;
        for (const t of times) {
            count += Math.floor(mid / t);
        }

        if (count >= n) {
            answer = mid;        // 가능하니 기록하고
            right = mid - 1;     // 더 줄여본다
        } else {
            left = mid + 1;      // 모자라니 늘린다
        }
    }

    return answer;
}
