/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    
    const checkCoordinateAttacked = (x, y, queens) => {
        for (const [qx, qy] of queens) {
            if (qx === x) {
                return true
            }
            if (qy === y) {
                return true
            }
            if (Math.abs(qx - x) === Math.abs(qy - y)) {
                return true
            }
        }
        return false
    }
    
    const result = []
    
    const dfs = (queens, row) => {
        if (queens.length === n) {
            result.push([...queens])
            return
        }
        for (let i = 0; i < n; i++) {
            const isCoordinateAttacked = checkCoordinateAttacked(row, i, queens)
            if (isCoordinateAttacked) {
                continue
            }

            queens.push([row, i])
            dfs(queens, row + 1)
            queens.pop()
        }
    }
    
    dfs([], 0)
    const answer = []
    for (const queens of result) {
        const board = new Array(n).fill(0).map(() => new Array(n).fill('.'))
        for (const [x, y] of queens) {
            board[x][y] = 'Q'
        }
        answer.push(board.map((v) => v.join('')))
    }
    
    return answer
}
