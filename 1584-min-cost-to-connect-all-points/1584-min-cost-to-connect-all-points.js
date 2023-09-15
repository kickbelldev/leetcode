/**
 * @param {number[][]} points
 * @return {number}
 */

var minCostConnectPoints = function(points) {
    const edges = []

    const getDistance = (xi, yi, xj, yj) => {
        return Math.abs(xi - xj) + Math.abs(yi - yj)
    }
    
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            const distanceObj = {
                f: i,
                s: j,
                dist: getDistance(...points[i], ...points[j])
            }
            edges.push(distanceObj)
        }
    }
    
    edges.sort((a, b) => a.dist - b.dist)
    
    const parent = new Array(points.length).fill(0).map((_, i) => i)
    
    const findRoot = (x) => {
        if (parent[x] === x) return x
        return parent[x] = findRoot(parent[x])
    }
    
    const unionRoot = (x, y) => {
        x = findRoot(x)
        y = findRoot(y)
        
        if (x !== y) parent[y] = x
    }
    
    const kruskal = () => {
        const mst = []
        
        for (let i = 0; i < edges.length; i++) {
            const currEdge = edges[i]
            
            const { f, s } = currEdge
            
            if (findRoot(f) === findRoot(s)) continue
            
            mst.push(currEdge)
            
            unionRoot(f, s)
            
            if (mst.length == points.length - 1) return mst
        }
        
        return mst
    }
    
    const mst = kruskal()
    
    return mst.reduce((acc, curr) => acc + curr.dist, 0)
}

