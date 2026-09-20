function isPrime(n) {
  if( n < 2) return false
  for(let i = 2; i*i <= n; i++) {
    if(n % i===0) return false
  }
  return true
}

function solution(nums) {
  let length = nums.length
  let answer = 0;
  for(let i = 0; i<length-2; i ++) {
    for(let j = i+1; j<length-1; j++) {
      for(let k = j+1; k<length; k++) {
        if(isPrime(nums[i]+nums[j]+nums[k])) answer++;
      }
    }
  }
  return answer;
}
