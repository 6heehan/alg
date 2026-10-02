function solution(n, words) {
    const used = new Set();
    used.add(words[0]);

    for (let i = 1; i < words.length; i++) {
        const prev = words[i - 1];
        const curr = words[i];

        const isDuplicate = used.has(curr);
        const isWrongStart = curr[0] !== prev[prev.length - 1];

        if (isDuplicate || isWrongStart) {
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }

        used.add(curr);
    }

    return [0, 0];
}
