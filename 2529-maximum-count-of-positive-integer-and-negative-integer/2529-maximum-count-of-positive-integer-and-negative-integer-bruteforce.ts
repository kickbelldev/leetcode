function maximumCount (nums: number[]): number {
  let neg = 0
  let pos = 0

  for (const num of nums) {
    if (num < 0) {
      neg++
    } else if (num > 0) {
      pos++
    }
  }

  return Math.max(neg, pos)
}