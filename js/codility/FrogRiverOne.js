function solution(X, A) {
    const covered = new Array(X + 1).fill(false); // 칸별 체크 (0번은 안 씀)
    let remaining = X;                             // 아직 빈 칸 개수

    for (let index = 0; index < A.length; index++) {
        const pos = A[index];          // 이번 초에 잎이 떨어진 칸

        if (!covered[pos]) {           // 처음 채워지는 칸이면
            covered[pos] = true;
            remaining--;

            if (remaining === 0) {     // 빈 칸이 다 없어지면
                return index;          // 그때의 시간이 답
            }
        }
        // 이미 채워진 칸이면 아무것도 안 하고 다음 초로
    }

    return -1; // 끝까지 봤는데 빈 칸이 남음
}
