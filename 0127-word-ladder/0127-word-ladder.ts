function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
  const wordSet = new Set(wordList)
  const visited = new Set([beginWord])

  const queue: [string, number][] = [[beginWord, 1]]

  while (queue.length) {
    const [current, k] = queue.shift()

    for (let i = 0; i < current.length; i++) {
      for (let charCode = 97; charCode <= 122; charCode++) {
        const char = String.fromCharCode(charCode)

        const next = current.substring(0, i) + char + current.substring(i + 1)
        if (wordSet.has(next)) {
          if (next === endWord) {
            return k + 1
          }

          if (!visited.has(next)) {
            visited.add(next)
            queue.push([next, k + 1])
          }
        }
      }
    }
  }

  return 0
}