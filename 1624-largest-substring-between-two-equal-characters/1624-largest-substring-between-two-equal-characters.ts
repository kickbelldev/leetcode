function maxLengthBetweenEqualCharacters(s: string): number {
    let max = -1
    const firstIndex = {}
    for (let i = 0; i < s.length; i++) {
        if (firstIndex[s[i]] !== undefined) {
            max = Math.max(max, i - firstIndex[s[i]] - 1)
        } else {
            firstIndex[s[i]] = i
        }
    }
    
    return max
};