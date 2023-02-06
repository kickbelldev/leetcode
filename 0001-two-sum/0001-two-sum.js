/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const nums_map = {}
    for (let i in nums) {
        if (nums_map[target - nums[i]]) {
            return [Number(nums_map[target - nums[i]]), i]
        }
        nums_map[nums[i]] = i
    }
};