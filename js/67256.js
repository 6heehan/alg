function solution(numbers, hand) {
    const pos = {
        1: [0,0], 2: [0,1], 3: [0,2],
        4: [1,0], 5: [1,1], 6: [1,2],
        7: [2,0], 8: [2,1], 9: [2,2],
        "*": [3,0], 0: [3,1], "#": [3,2]
    };

    function dist(a, b) {
        return Math.abs(pos[a][0] - pos[b][0]) + Math.abs(pos[a][1] - pos[b][1]);
    }

    let answer = '';
    let prevL = "*";
    let prevR = "#";

    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        const col = pos[num][1];

        let use;
        if (col === 0) {
            use = "L";
        } else if (col === 2) {
            use = "R";
        } else {
            const dL = dist(prevL, num);
            const dR = dist(prevR, num);
            if (dL < dR) use = "L";
            else if (dR < dL) use = "R";
            else use = hand === "left" ? "L" : "R";
        }

        answer += use;
        if (use === "L") prevL = num;
        else prevR = num;
    }

    return answer;
}
