function solution(arr, k) {
  var answer = [];
  var isEven = k % 2 === 0;
  if(isEven) {
    answer = arr.map(num => num + k)
  } else {
    answer = arr.map(num => num * k)
  }
  return answer;
}
