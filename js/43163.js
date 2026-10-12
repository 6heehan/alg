function solution(begin, target, words) {
  if(!words.includes(target)) return 0;

  const visited = new Array(words.length).fill(false);
  const queue = [[begin, 0]];

  while(queue.length > 0) {
    const [current, step] = queue.shift();

    if(current === target) return step;
    
    for(let i=0; i<words.length; i++) {
      if(visited[i]) continue;
      if(!isConnected(current, words[i])) continue;

      visited[i] = true;
      queue.push([words[i], step+1]);
    }
  }
  return 0;
}

function isConnected(a,b) {
  let diff = 0;
  for(let i=0; i<a.length; i++) {
    if(a[i] !== b[i]) diff++;
  }
  return diff === 1;
}
