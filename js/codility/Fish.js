function solution(A, B) {
  const stack = [];
  let alive = 0;

  const n = A.length;

  for(let i = 0; i<n; i++) {
    if(B[i] === 1) {
      stack.push(A[i]);
      continue;
    }

    let survived = true;
    while(stack.length > 0) {
      if(stack[stack.length -1] > A[i]) {
        survived = false;
        break;
      }
      stack.pop();
    }
    if(survived) alive++;
  }

  return alive + stack.length;
}
