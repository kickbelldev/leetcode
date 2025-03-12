function numIdenticalPairs(nums: number[]): number {
  const obj: {
    [key in number]: number
  } = {}

  for (const num of nums) {
    if (!obj[num]) {
      obj[num] = 0
    }
    obj[num]++
  }

  return Object.values(obj).reduce((acc, cur) => acc + Math.floor(cur * (cur - 1) / 2), 0)
}