function maxLengthBetweenEqualCharacters(s: string): number {
    let max = -1
    for (let i = 0; i < s.length - 1; i++) {
        const l = s.lastIndexOf(s[i])
        
        if (i !== l) {
            max = Math.max(l - i - 1, max)
        }
    }
    
    return max
};