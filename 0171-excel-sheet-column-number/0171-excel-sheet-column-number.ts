function titleToNumber(columnTitle: string): number {
    const column = columnTitle.split('')
    const list = []
    let answer = 0
    for (const char of column) {
        const alphabetCode = char.charCodeAt(0) - 65 + 1
        list.push(alphabetCode)
    }
    const reversed = list.reverse()

    for (let i = 0; i < reversed.length; i++) {
        answer += Math.pow(26, i) * reversed[i]
    }

    return answer
};