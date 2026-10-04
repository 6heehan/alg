function solution(n, a, b) {
  let answer = 0;
  while(a !== b) {
    a = Math.ceil(a / n);
    b = Math.ceil(b / n);
    answer ++;
  }
  return answer;
}
