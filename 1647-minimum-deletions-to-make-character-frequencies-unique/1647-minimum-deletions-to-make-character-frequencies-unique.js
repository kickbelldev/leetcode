/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    const arr = s.split('')
    const map = {}
    
    for (const char of arr) {
        if (!map[char]) {
            map[char] = 0
        }
        map[char]++
    }
    
    let entries = Object.entries(map)
    let cnt = 0
    let flag = true
    while (flag) {
        flag = false
        entries = entries.filter((v) => v[1]).sort((a, b) => b[1] - a[1])
        for (let i = 0; i < entries.length - 1; i++) {
            if (entries[i][1] == entries[i + 1][1]) {
                entries[i][1]--
                cnt++
                flag = true
                break
            }
        }
    }
    
    return cnt
};