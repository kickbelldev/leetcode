/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0
  let right = height.length - 1

  let maxAmount = 0
  while (left < right) {
    maxAmount = Math.max(maxAmount, Math.min(height[left], height[right]) * (right - left))
    if (height[left] >= height[right]) {
      right--
    } else {
      left++
    }
  }

  return maxAmount
}