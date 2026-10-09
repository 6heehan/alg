function solution(A) {
  let cnt = 0;
  for(const a of A) {
    cnt += (a === '(' ? 1 : -1)
    if(cnt < 0) return 0;
  }

  return cnt === 0 ? 1 : 0;
  
}
