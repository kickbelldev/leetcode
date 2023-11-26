/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function(pattern) {
    const stack = [1]
    const answer = []
    for (const char of pattern) {
        let last = stack[stack.length - 1]
        
        if (char === 'I') {
            while (stack.length) {
                const pop = stack.pop()
                last = Math.max(last, pop)
                answer.push(pop)
            }
        }
        stack.push(last + 1)
    }
    answer.push(...stack.reverse())
    
    return answer.join('')
};