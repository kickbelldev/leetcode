/**
 * @param {number[]} arr
 * @return {string}
 */
var largestTimeFromDigits = function(arr) {
    const allCases = getPermutations(arr, 4).map((v) => [Number('' + v[0] + v[1]), Number('' + v[2] + v[3])])
    let h = -1
    let m = -1
    for (const [hh, mm] of allCases) {
        if (hh > h && hh < 24 && mm < 60) {
            h = hh
            m = mm
        } else if (hh == h && mm > m && mm < 60) {
            m = mm
        }
    }
    
    if (h == -1 && m == -1) {
        return ''
    }
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
};

const getPermutations = function (arr, selectNumber) {
    const results = []
    if (selectNumber === 1) return arr.map((el) => [el])

    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]
        const permutations = getPermutations(rest, selectNumber - 1)
        const attached = permutations.map((el) => [fixed, ...el])
        results.push(...attached)
    })

    return results
}