/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var longestString = function(x, y, z) {
    const min = Math.min(x, y)

    if (x === y) {
        return (min * 2 + z) * 2
    }
    
    return (min * 2 + 1 + z) * 2
};