function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const courseGraph: {
    degree: number
    set: Set<number>
  }[] = Array(numCourses).fill(undefined).map(() => ({
    degree: 0,
    set: new Set()
  }))

  for (const [a, b] of prerequisites) {
    courseGraph[b].degree++
    courseGraph[a].set.add(b)
  }

  const queue = []

  for (let i = 0; i < numCourses; i++) {
    if (courseGraph[i].degree === 0) {
      queue.push(i)
    }
  }

  const result: number[] = []

  while (queue.length) {
    const current = queue.shift()
    result.push(current)

    for (const next of courseGraph[current].set) {
      courseGraph[next].degree -= 1
      if (courseGraph[next].degree === 0) {
        queue.push(next)
      }
    }
  }

  if (result.length !== numCourses) {
    return []
  }

  return result.reverse()
}