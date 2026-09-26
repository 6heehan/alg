function solution(board, moves) {
    const basket = [];
    let answer = 0;

    for (const move of moves) {
        const col = move - 1;              // 1부터 세니까 1 빼기

        for (let row = 0; row < board.length; row++) {
            if (board[row][col] === 0) continue;   // 빈 칸이면 계속 내려감

            const doll = board[row][col];
            board[row][col] = 0;           // 뽑았으니 비우기

            if (basket[basket.length - 1] === doll) {
                basket.pop();              // 같으면 맨 위 것도 빼고
                answer += 2;               // 두 개 사라짐
            } else {
                basket.push(doll);
            }
            break;                         // 하나 뽑았으면 이 열은 끝
        }
    }

    return answer;
}
