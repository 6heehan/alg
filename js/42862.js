function solution(n, lost, reserve) {
  const student = new Array(n+1).fill(1);
  let answer = 0;

  for(let l of lost) student[l] -= 1;
  for(let r of reserve)  student[r] += 1;

  for(let i = 1; i<= n; i++) {
    if(student[i] !== 0) continue;

    if(student[i-1] === 2) {
      student[i] = 1;
      student[i-1] = 1;
    } else if(student[i+1] ===2) {
      student[i] = 1;
      student[i+1] = 1;
    }
  }

  for(let i = 1; i<=n ; i++) {
      if(student[i] >= 1) answer++;
  }

  return answer;
}
