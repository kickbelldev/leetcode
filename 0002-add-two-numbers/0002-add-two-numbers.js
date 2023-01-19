/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let c = l1
    let d = l2
    let e = Array(101).fill(0)
    let i = 1
    while (true) {
        const number = (c?.val || 0) + (d?.val || 0)
        
        e[i++] += number
        if (c?.next === undefined && d?.next === undefined) break
        c = c?.next
        d = d?.next
    }
    for (let i = 0; i < e.length; i++) {
        while (e[i] >= 10) {
            e[i] -= 10
            e[i + 1] += 1
        }
    }
    e.length = i
    if (e[e.length - 1] === 0) e.pop()
    e.shift()
    return recursive(e)
}

function recursive (arr) {
    if (!arr.length) return
    return new ListNode(arr.shift(), recursive(arr))
}