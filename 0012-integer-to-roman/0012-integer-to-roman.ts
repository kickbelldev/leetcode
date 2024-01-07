function intToRoman(num: number): string {
    const toRoman = Object.entries({
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M',
    }).reverse()
    let result = ''
    while (num > 0) {
        for (const [n, str] of toRoman) {
            if (num >= Number(n)) {
                num -= Number(n)
                result += str
                break
            }
        }
    }
    
    return result
};