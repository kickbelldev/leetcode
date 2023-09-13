/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    return points.sort((a, b) => getDistance(...a) - getDistance(...b)).slice(0, k)
};
                
const getDistance = (x, y) => {
    return Math.sqrt(x * x + y * y)
}