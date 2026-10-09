// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
    // Implement your solution here
    const answer = [];
    // const s = [...S].map(n => {
    //     if(n === 'A') return 1;
    //     if(n === 'C') return 2;
    //     if(n === 'G') return 3;
    //     if(n === 'T') return 4;
    // })

    // const len = P.length;
    // for(let i = 0; i<len; i++) {
    //     let indexOne = P[i];
    //     let indexTwo = Q[i];

    //     const newS = s.slice(indexOne, indexTwo+1);
    //     answer.push(Math.min(...newS));
    // }

    const n = S.length;
    const A = new Array(n+1).fill(0);
    const C = new Array(n+1).fill(0);
    const G = new Array(n+1).fill(0);

    for(let i = 0; i<n; i++) {
            A[i+1] = A[i] + (S[i] === 'A' ? 1 : 0);
            C[i+1] = C[i] + (S[i] === 'C' ? 1 : 0);
            G[i+1] = G[i] + (S[i] === 'G' ? 1 : 0);
        
    }

    const len = P.length;
    for(let i = 0; i<len; i++) {
        const from = P[i];
        const to = Q[i] + 1;
        if(A[to] - A[from] > 0) {
            answer.push(1);
        }
        else if(C[to] - C[from] >0) {
            answer.push(2);
        }
        else if(G[to] - G[from] >0) {
            answer.push(3);
        }
        else {
            answer.push(4);
        } 

    }
    return answer;
}
