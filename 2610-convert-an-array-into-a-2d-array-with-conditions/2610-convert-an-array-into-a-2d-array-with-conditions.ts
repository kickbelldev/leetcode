function findMatrix(nums: number[]): number[][] {
    const result = []
    
    while (nums.filter((v) => v != undefined).length) {
        const row = []
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] != undefined) {
                if (!row.includes(nums[i])) {
                    row.push(nums[i])
                    nums[i] = undefined
                }
            }
        }
        
        result.push(row)
    }
    
    return result
};