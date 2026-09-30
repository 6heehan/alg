function solution(citations) {
    const sorted = citations.sort((a, b) => b - a);   // 내림차순

    let answer = 0;
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] >= i + 1) answer = i + 1;
        else break;
    }
    return answer;
}
