function scoreOfString(s: string): number {
  const N = s.length

  let score = 0
  for (let i = 0; i < N - 1; i++) {
    score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1))
  }

  return score
}