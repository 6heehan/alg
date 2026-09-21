function solution(sizes) {
  let maxLong = 0;
  let maxShort = 0;

  for(let i = 0; i < sizes.length ; i++) {
    let long =  Math.max(sizes[i][0], sizes[i][1]);
    let short = Math.min(sizes[i][0], sizes[i][1]);

    if(long > maxLong) maxLong = long;
    if(short > maxShort) maxShort = short;
  }

  return maxLong*maxShort;
}
