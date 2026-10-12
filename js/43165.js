// function solution(numbers, target) {
//   let answer = 0;
//   function dfs(index , sum) {
//     if(index === numbers.length) {
//       if(sum === target) answer++;
//       return;
//     }
//     dfs(index + 1, sum + numbers[index]);
//     dfs(index + 1, sum - numbers[index]);
//   }
//   dfs(0,0);
//   return answer;
// }

function solution(numbers, target) {
  let answer = 0;

  const queue = [[0,0]];

  while(queue.length > 0) {
    const [index, sum] = queue.shift();

    if(index === numbers.length) {
      if(sum === target) answer++;
      continue;
    }

    queue.push([index+1, sum + words[index]]);
    queue.push([index+1, sum - words[index]]);
  }

  return answer;
}
