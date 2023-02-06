/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let result = 0
    
    let left = 0
    let right = height.length - 1
    let lMax = height[left]
    let rMax = height[right]

    while (left < right) {
        lMax = Math.max(lMax, height[left])
        rMax = Math.max(rMax, height[right])
        
        if (lMax < rMax) {
            result += lMax - height[left]
            left++
        } else {
            result += rMax - height[right]
            right--
        }
    }
    
    return result
};