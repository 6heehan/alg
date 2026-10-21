function solution(A) {
  let min = Infinity;
  let answer = 0;

  const len = A.length;

  for(let i=0; i<len-1; i++) {
    const avg2 = (A[i] + A[i+1])/ 2;
    if(avg2 < min) {
      min = avg2;
      answer = i;
    }

    if(i+2 >= len) break;

    const avg3 = (A[i] + A[i+1] + A[i+2]) / 3;
    if(avg3 < min) {
      min = avg3;
      answer = i;
    }
  }

  return answer;
}
