/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) {
        return s
    }
    const arr = Array(numRows).fill().map(() => ([]))
    
    let x = 0
    let y = 0
    const dx = [0, 1]
    const dy = [1, -1]
    let direction = 0
    for (const char of s) {
        if (y === numRows - 1) {
            direction = 1
        }
        if (y === 0) {
            direction = 0
        }
        
        arr[y][x] = char
        
        x += dx[direction]
        y += dy[direction]
    }
    
    let result = ''
    
    for (const a of arr) {
        for (const char of a) {
            if (char) {
                result += char
            }
        }
    }
    
    return result
};