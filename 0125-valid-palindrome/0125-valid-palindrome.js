/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const arr = s.toLowerCase().split('').filter((v) => /[0-9a-z]/.test(v))
    const reversed = [...arr].reverse()
    for (const i in arr) {
        if (arr[i] !== reversed[i]) {
            return false
        }
    }
    
    return true
};