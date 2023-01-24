/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const a = []
    a[1] = 'I'
    a[5] = 'V'
    a[10] = 'X'
    a[50] = 'L'
    a[100] = 'C'
    a[500] = 'D'
    a[1000] = 'M'
    
    a[4] = 'IV'
    a[9] = 'IX'
    a[40] = 'XL'
    a[90] = 'XC'
    a[400] = 'CD'
    a[900] = 'CM'
    
    let result = 0
    let i = 0
    while (i < s.length) {
        const slice1 = s.slice(i, i + 2)
        const index1 = a.indexOf(slice1)
        const slice2 = s.slice(i, i + 1)
        const index2 = a.indexOf(slice2)
        if (index1 !== -1) {
            result += index1
            i += 2
        } else if (index2 !== -1) {
            result += index2
            i += 1
        }
    }
    
    return result
}