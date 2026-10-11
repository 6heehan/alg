function solution(n, computers) {
    const visited = new Array(n).fill(false);
    let answer = 0;

    function dfs(start) {
        visited[start] = true;
        for (let j = 0; j < n; j++) {
            if (computers[start][j] === 1 && !visited[j]) {
                dfs(j);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (visited[i]) continue;
        dfs(i);
        answer++;
    }

    return answer;
}
