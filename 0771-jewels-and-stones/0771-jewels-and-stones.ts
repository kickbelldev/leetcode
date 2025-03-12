function numJewelsInStones(jewels: string, stones: string): number {
  const jewelSet = new Set([...jewels])
  return [...stones].filter((stone) => jewelSet.has(stone)).length
}