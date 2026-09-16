function solution(rny_string) {
  return [...rny_string].map(a => a === 'm' ? 'rn' : a).join('');
}
