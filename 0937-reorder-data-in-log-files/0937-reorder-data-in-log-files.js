/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    const digits = []
    const letters = []
    for (const log of logs) {
        if (/ \d/.test(log)) {
            digits.push(log)
        } else {
            letters.push(log)
        }
    }
    
    letters.sort((a, b) => {
        const aArr = a.split(' ')
        const bArr = b.split(' ')
        const aId = aArr.shift()
        const bId = bArr.shift()
        
        const compare = aArr.join(' ').localeCompare(bArr.join(' '))
        if (compare) return compare
        return a.localeCompare(b)
    })
    
    return [...letters, ...digits]
};