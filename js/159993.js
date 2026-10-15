function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;

    const dy = [-1, 1, 0, 0];
    const dx = [0, 0, -1, 1];

    function find(target) {
        for (let y = 0; y < n; y++) {
            for (let x = 0; x < m; x++) {
                if (maps[y][x] === target) return [y, x];
            }
        }
    }

    function bfs(start, end) {
        const [sy, sx] = start;
        const visited = Array.from({ length: n }, () => new Array(m).fill(false));

        const queue = [[sy, sx, 0]];
        visited[sy][sx] = true;

        while (queue.length > 0) {
            const [y, x, dist] = queue.shift();

            if (maps[y][x] === end) return dist;

            for (let i = 0; i < 4; i++) {
                const ny = y + dy[i];
                const nx = x + dx[i];

                if (ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
                if (maps[ny][nx] === 'X') continue;
                if (visited[ny][nx]) continue;

                visited[ny][nx] = true;
                queue.push([ny, nx, dist + 1]);
            }
        }

        return -1;
    }

    const toLever = bfs(find('S'), 'L');
    if (toLever === -1) return -1;

    const toExit = bfs(find('L'), 'E');
    if (toExit === -1) return -1;

    return toLever + toExit;
}
