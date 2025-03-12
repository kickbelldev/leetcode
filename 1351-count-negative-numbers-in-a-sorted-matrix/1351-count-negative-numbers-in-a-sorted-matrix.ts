function countNegatives(grid: number[][]): number {
  const M = grid[0].length
  return grid.map((row) => row.findIndex((num) => num < 0)).filter((idx) => idx !== -1).reduce((acc, cur) => acc + (M - cur), 0)
}