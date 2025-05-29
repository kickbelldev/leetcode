/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {

  exec(head)

  return head
}

function exec (node: ListNode | null) {
  const { next } = node

  if (!next) {
    return
  }

  const big = Math.max(node.val, next.val)
  const small = Math.min(node.val, next.val)

  const val = euclidean(big, small)

  node.next = new ListNode(val, next)

  exec(next)
}

function euclidean(a: number, b: number) {
  const r = a % b

  if (r === 0) {
    return b
  }

  return euclidean(b, r)
}