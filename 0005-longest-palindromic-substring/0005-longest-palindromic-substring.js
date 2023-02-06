/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 2 || s === s.split('').reverse().join('')) {
        return s
    }
    
    const expand = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--
            right++
        }
        return s.slice(left + 1, right)
    }
    result = ''
    for (let i = 0; i < s.length - 1; i++) {
        const even = expand(i, i + 1)
        const odd = expand(i, i + 2)
        result = [even, odd, result].sort((a, b) => b.length - a.length)[0]
    }
    
    return result
};