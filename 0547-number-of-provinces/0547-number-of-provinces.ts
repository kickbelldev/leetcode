function findCircleNum(isConnected: number[][]): number {
  const N = isConnected.length

  const visited = Array(N).fill(false)

  let answer = 0

  function bfs(index: number) {
    const queue = [index]

    while (queue.length) {
      const current = queue.pop()

      visited[current] = true

      for (let next = 0; next < N; next++) {
        const isConnectedToNext = isConnected[current][next] === 1
        const isVisited = visited[next]
        if(isConnectedToNext && !isVisited) {
          queue.unshift(next)
        }
      }
    }
  }

  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      bfs(i)
      answer++
    }
  }

  return answer
}