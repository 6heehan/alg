function solution(N, A) {
    const counters = new Array(N).fill(0);
    let max = 0;   // 현재 가장 큰 카운터 값
    let base = 0;  // 마지막 전체 연산 때 맞춘 값 (바닥)

    for (const a of A) {
        if (a === N + 1) {
            base = max;                 // 배열은 안 건드리고 바닥만 올림
        } else {
            const i = a - 1;
            if (counters[i] < base) counters[i] = base; // 바닥보다 낮으면 먼저 끌어올림
            counters[i]++;
            if (counters[i] > max) max = counters[i];
        }
    }

    for (let i = 0; i < N; i++) {
        if (counters[i] < base) counters[i] = base;     // 안 건드려진 칸 정리
    }
    return counters;
}
