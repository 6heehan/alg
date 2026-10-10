function solution(H) {
  const stack = [];
  let answer = 0;

  for(const h of H) {
    while(stack.length > 0 && stack[stack.length - 1] > h) {
      stack.pop();
    }

    if(stack.length > 0 && stack[stack.length -1] === h) {
      continue;
    }

    stack.push(h);
    answer++;
  }

  return answer;
}
