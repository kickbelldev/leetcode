function interpret(command: string): string {
  let str = ''

  let answer = ''
  for (const ch of command) {
    str += ch

    if (str === 'G') {
      answer += 'G'
      str = ''
    } else if (str === '()') {
      answer += 'o'
      str = ''
    } else if (str === '(al)') {
      answer += 'al'
      str = ''
    }
  }

  return answer
};