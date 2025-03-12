function getSneakyNumbers(nums: number[]): number[] {
  const map = {}
  return nums.reduce((acc, cur) => {
    if (map[cur]) {
      acc.push(cur)
      return acc
    }
    map[cur] = true
    return acc
  }, [])
}