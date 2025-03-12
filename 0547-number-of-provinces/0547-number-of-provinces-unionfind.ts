function findCircleNum(isConnected: number[][]): number {
  const N = isConnected.length

  const parent = Array(N)

  for (let i = 0; i < N; i++) {
    parent[i] = i
  }

  function find(x) {
    if (parent[x] === x) {
      return x
    }

    return parent[x] = find(parent[x])
  }

  function union(a, b) {
    const aParent = find(a)
    const bParent = find(b)

    if (aParent !== bParent) {
      parent[bParent] = aParent
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      if (isConnected[i][j]) {
        union(i, j)
      }
    }
  }

  let answer = 0

  for (let i = 0; i < N; i++) {
    if (parent[i] === i) {
      answer++
    }
  }

  return answer
}