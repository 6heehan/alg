function solution(N, stages) {
    const count = new Map();
    for (const s of stages) {
        count.set(s, (count.get(s) || 0) + 1);
    }

    const result = [];
    let remain = stages.length;

    for (let i = 1; i <= N; i++) {
        const stuck = count.get(i) || 0;

        const rate = remain === 0 ? 0 : stuck / remain;
        result.push([i, rate]);

        remain -= stuck;
    }

    return result.sort((a, b) => b[1] - a[1] || a[0] - b[0]).map(x => x[0]);
}
