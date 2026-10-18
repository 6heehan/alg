function solution(s) {
  const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

  for(let i = 0; i<10; i++) {
    s = s.replace(new RegExp(words[i], "g"),i);
  }

  return Number(s);
}
