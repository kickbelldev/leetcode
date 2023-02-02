/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const p = paragraph.toLowerCase().split(/\W+/)
    
    const obj = {}
    let max = {
        word: '',
        cnt: 0
    }
    for (const word of p) {
        if (banned.includes(word)) continue
        if (!obj[word]) {
            obj[word] = 0
        }
        obj[word]++
        if (obj[word] > max.cnt) {
            max = {
                word,
                cnt: obj[word]
            }
        }
    }
    
    return max.word
};