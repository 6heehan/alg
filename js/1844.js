function solution(maps) {
    var answer = 0;
    let n = maps[0].length;
    let m = maps.length;
    
    const dy = [-1, 0, 1, 0];
    const dx = [0, 1, 0 ,-1];
    
    const queue = [[0, 0]];
    maps[0][0] = 1;
    
    while(queue.length > 0) {
        const [y,x] = queue.shift();
        
        for(let i = 0; i<4; i++) {
            if(dy[i] + y < 0 || dy[i] + y >= m || dx[i] + x >= n || dx[i] + x < 0) continue;
            if(maps[dy[i]+y][dx[i]+x] !== 1) continue;
            maps[dy[i]+y][dx[i]+x] = maps[y][x] + 1;
            queue.push([dy[i]+y, dx[i]+x]);
        }
    }
    return maps[m-1][n-1] === 1 ? -1 : maps[m-1][n-1];
}
