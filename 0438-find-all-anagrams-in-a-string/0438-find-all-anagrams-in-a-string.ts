function findAnagrams(s: string, p: string): number[] {
    let left = 0

    const answer = []

    const sMap = {}

    for (let i = left; i < p.length; i++) {
        sMap[s[i]] = sMap[s[i]] ?? 0
        sMap[s[i]]++
    }

    const pMap = {}

    for (const char of p) {
        pMap[char] = pMap[char] ?? 0
        pMap[char]++
    }

    while (left <= s.length - p.length) {

        let flag = true
        for (const key in sMap) {
            if (!sMap[key]) {
                delete sMap[key]
            }
            if (sMap[key] !== pMap[key]) {
                flag = false
                break
            }
        }

        if (flag) {
            answer.push(left)
        }
        sMap[s[left]] = sMap[s[left]] ?? 0
        sMap[s[left]]--
        sMap[s[left + p.length]] = sMap[s[left + p.length]] ?? 0
        sMap[s[left + p.length]]++
        left++
    }

    return answer
}