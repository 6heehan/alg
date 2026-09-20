function solution(answers) {
  let answer = [];
  let problem = [[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]];
  let score = [0,0,0];
  for(let i = 0; i< answers.length; i++) {
    if( problem[0][i%problem[0].length] === answers[i] ) score[0]++;
    if( problem[1][i%problem[1].length] === answers[i] ) score[1]++;
    if( problem[2][i%problem[2].length] === answers[i] ) score[2]++;
  }
  let max = Math.max(...score);
  for(let i =0; i<3; i++) {
    if(max === score[i]) answer.push(i+1)
  }
  return answesr;
}
