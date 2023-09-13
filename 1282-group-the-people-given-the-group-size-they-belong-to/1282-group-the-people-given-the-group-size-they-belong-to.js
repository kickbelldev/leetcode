/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const n = groupSizes.length
    
    const people = groupSizes.map((size, idx) => ({ size, idx })).sort((a, b) => b.size - a.size)
    
    const group = [[]]
    for (let j = 0; j < people.length; j++) {
        if (people[j].size > group[group.length - 1].length) {
            group[group.length - 1].push(people[j].idx)
        } else {
            group.push([people[j].idx])
        }
    }
    
    return group
};