/**
 * @param {number[][]} matrix
 * @return {number}
 */
var largestSubmatrix = function(matrix) {
    let answer = 0;
    const history = Array(matrix[0].length).fill(0)

    for (const row of matrix) {
        for (let i = 0; i < row.length; i++) {
            history[i] = row[i] === 0 ? 0 : history[i] + 1
        }
        
        const sorted = [...history].sort((a, b) => a - b)

        for (let i = 0; i < sorted.length; i++) {
            answer = Math.max(answer, sorted[i] * (row.length - i))
        }
    }
    
    return answer
};