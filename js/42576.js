function solution(participant, completion) {
  let answer = ''
  const count = new Map();
  for(const name of participant) {
    count.set(name, (count.get(name) || 0) + 1)
  }

  for(const name of completion) {
    count.set(name, count.get(name) - 1)
  }

  for(const [name, n] of count) {
    if(n>0) answer = name;
  }
  return answer;
}
