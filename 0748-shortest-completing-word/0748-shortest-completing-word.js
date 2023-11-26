/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    const license = licensePlate.toLowerCase().match(/[a-z]/gi)
    
    const licenseMap = {}
    let cnt = 0
    for (const char of license) {
        if (!licenseMap[char]) {
            licenseMap[char] = 0
        }
        licenseMap[char]++
        cnt++
    }
    
    for (const word of words.sort((a, b) => a.length - b.length)) {
        let currMap = { ...licenseMap }
        let currCnt = cnt
        for (const char of word) {
            if (currMap[char]) {
                currMap[char]--
                currCnt--
            }
        }
        if (!currCnt) {
            return word
        }
    }
};