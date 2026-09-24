function solution(arr) {
  const answer = [];
  let tmp;

  for(a of arr) {
    if(tmp === a) 
      continue;
    tmp = a;
    answer.push(a)
  }
  return answer;
}
