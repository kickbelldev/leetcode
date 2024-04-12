function trap(height: number[]): number {
    let left = 0
    let right = height.length - 1
    let leftTop = height[left]
    let rightTop = height[right]
    let water = 0
    while (left < right) {
        if (leftTop < rightTop) {
            left++
            if (height[left] < leftTop) {
                water += leftTop - height[left]
            } else {
                leftTop = height[left]
            }
        } else {
            right--
            if (height[right] < rightTop) {
                water += rightTop - height[right]
            } else {
                rightTop = height[right]
            }
        }
    }
    return water
};