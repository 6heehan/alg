function solution(A) {
  let east = 0;
  let cnt = 0;

  for(let i = 0; i<A.length; i++) {
    if(A[i] === 0) east++;

    else {
      cnt += east;
      if(1000000000 < cnt) retrun -1;
    }
  }

  return cnt;
}
