function solution (array, commands) {
  const answer = [];
  for(let i=0; i<commands.length; i++) {
    
  let tmpArr = array.slice(commands[i][0]-1, commands[i][1])
  answer.push(tmpArr.sort((a,b)=> a-b)[commands[i][2]-1])
 }
  return answer
}
