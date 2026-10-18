function solution(survey, choices) {
    const score = { R:0, T:0, C:0, F:0, J:0, M:0, A:0, N:0 };
    const points = { 1:3, 2:2, 3:1, 4:0, 5:1, 6:2, 7:3 };

    for (let i = 0; i < survey.length; i++) {
        const [first, second] = survey[i];
        const c = choices[i];

        if (c < 4) {
            score[first] += points[c];
        } else {
            score[second] += points[c];
        }
    }

    const pairs = [["R","T"], ["C","F"], ["J","M"], ["A","N"]];
    let answer = "";

    for (const [a, b] of pairs) {
        answer += score[a] >= score[b] ? a : b;
    }

    return answer;
}
