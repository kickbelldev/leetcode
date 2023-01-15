/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 1) return [[1]]

    const result = [[1], [1, 1]]
    for (let i = 2; i < numRows; i++) {
        const a = [1]

        for (let j = 0; j < i - 1; j++) {
            a.push(result[i - 1][j] + result[i - 1][j + 1])
        }

        a.push(1)

        result.push(a)
    }

    return result
};