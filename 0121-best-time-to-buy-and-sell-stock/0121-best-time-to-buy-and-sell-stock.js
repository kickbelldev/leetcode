/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0
    let minPrice = Number.MAX_SAFE_INTEGER
    
    for (const price of prices) {
        minPrice = Math.min(minPrice, price)
        profit = Math.max(profit, price - minPrice)
    }
    
    return profit
};