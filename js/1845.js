function solution(nums) {
  const kinds = new Set(nums).size;
  const pick = nums.length / 2;
  return Math.min(kinds, pick);
}
