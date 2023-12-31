function trimMean(arr: number[]): number {
    const cut = Math.floor(arr.length * 0.05)
    arr = arr.sort((a, b) => a - b).slice(cut, arr.length - cut)
    return arr.reduce((acc, curr) => acc + curr, 0) / arr.length
};