/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const arr = s.toLowerCase().split('').filter((v) => /[0-9a-z]/.test(v))
    
    while (arr.length) {
        const left = arr.shift()
        const right = arr.pop()
        if (!left || !right) break
        if (left !== right) {
            return false
        }
    }
    
    return true
};