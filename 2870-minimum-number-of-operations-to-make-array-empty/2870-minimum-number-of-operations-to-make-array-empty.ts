function minOperations(nums: number[]): number {
    const map: { [key: string]: number } = {}

    for (const num of nums) {
        map[num] = map[num] ?? 0
        map[num]++
    }

    let cnt = 0

    for (let c of Object.values(map)) {
        if (c === 1) {
            return -1
        }
        cnt += Math.ceil(c / 3)
    }

    return cnt
}