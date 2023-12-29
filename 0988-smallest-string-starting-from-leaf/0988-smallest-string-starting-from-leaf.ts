/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function smallestFromLeaf(root: TreeNode | null): string {
    let answer = '{';
    const dfs = (node: TreeNode, list: number[]) => {
        const newList = [...list, node.val]

        if (!node.left && !node.right) {
            const str = getString(newList)
            if (answer > str) {
                answer = str
            }
            return
        }
        
        if (node.left) {     
            dfs(node.left, newList)
        }
        if (node.right) {
            dfs(node.right, newList)
        }
    }
    
    const getString = (list: number[]) => {
        return list.reverse().map((v) => String.fromCharCode(97 + v)).join('')
    }
    
    dfs(root, [])
    
    return answer
};