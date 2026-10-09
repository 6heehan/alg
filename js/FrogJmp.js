function solution(X, Y, D) {
  const diff = Y - X;
  if(diff === 0) return 0;
  return Math.ceil(diff / D);
}
