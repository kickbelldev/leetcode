function findMatrix(nums: number[]): number[][] {
    const result = []
    let cnt = nums.length
    while (cnt) {
        const row = []
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] != undefined) {
                if (!row.includes(nums[i])) {
                    row.push(nums[i])
                    nums[i] = undefined
                    cnt--
                }
            }
        }
        
        result.push(row)
    }
    
    return result
};