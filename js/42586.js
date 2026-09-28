function solution(progresses, speeds) {
    const days = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));

    const answer = [];
    let standard = days[0];
    let cnt = 0;

    for (const d of days) {
        if (d <= standard) {
            cnt++;
        } else {
            answer.push(cnt);
            standard = d;
            cnt = 1;
        }
    }
    answer.push(cnt);

    return answer;
}
