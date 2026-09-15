function solution(n) {
  var answer = 0;
  var isEven = n % 2 === 0;
  if(isEven) {
    for(var i = 2; i <= n ; i += 2) 
      answer += i*i
  } else {
    for(var i = 1; i<= n ; i += 2) 
      answer += i
  }
  return answer;
}
