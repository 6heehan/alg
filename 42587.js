function solution(priorities, location) {
    const queue = priorities.map((p, i) => [i, p]);
    let count = 0;

    while (queue.length > 0) {
        const current = queue.shift();

        // 남은 것 중에 더 중요한 게 있나?
        const hasBigger = queue.some(item => item[1] > current[1]);

        if (hasBigger) {
            queue.push(current);      // 맨 뒤로
        } else {
            count++;                  // 인쇄, 순서 하나 증가
            if (current[0] === location) return count;   // 내 문서면 끝
        }
    }
}
