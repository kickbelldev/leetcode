function maximumCount (nums: number[]): number {
  const N = nums.length

  let left = 0
  let right = N - 1

  let neg = N
  while (left <= right) {
    const mid = Math.ceil((left + right) / 2)
    console.log(left, mid, right)
    if (nums[mid] < 0) {
      left = mid + 1
    } else {
      right = mid - 1
      neg = mid
    }
  }

  right = N - 1

  let pos = N
  while (left <= right) {
    const mid = Math.ceil((left + right) / 2)
    if (nums[mid] <= 0) {
      left = mid + 1
    } else {
      right = mid - 1
      pos = mid
    }
  }

  return Math.max(neg, N - pos)
}