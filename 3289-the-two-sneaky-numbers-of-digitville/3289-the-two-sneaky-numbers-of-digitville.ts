function getSneakyNumbers(nums: number[]): number[] {
  return nums.sort((a, b) => a - b).filter((_, i, arr) => arr[i] === arr[i + 1])
}