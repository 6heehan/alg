function solution(strArr) {
  return strArr.map((a,i) => i % 2 === 0 ? a.toLowerCase() : a.toUpperCase())
}
