// Find the shortest way (Dijctra)

function findShortestWay(graph, start, end, neighbors = {}, passed = []) {
  // Write info about close neighbors
  Object.keys(graph[start]).forEach(point => {
    // If new way faster than old - replace it
    if (((neighbors[start] || 0) + graph[start][point]) < (neighbors[point] || Number.POSITIVE_INFINITY)) {
      neighbors[point] = (neighbors[start] || 0) + graph[start][point]
    }
  })
  // Check current point as passed
  passed.push(start)

  // Find way to every neighbor
  Object.keys(neighbors).forEach(point => {
    // This point weren't passed yet
    if (!passed.includes(point)) {
      findShortestWay(graph, point, end, neighbors, passed)
    }
  })
  return neighbors
}
/* const graph = {}
graph.a = { b: 2, c: 1 }
graph.b = { f: 7 }
graph.c = { d: 5, e: 2 }
graph.d = { f: 2 }
graph.e = { f: 150 }
graph.f = { g: 1 }
graph.g = {}

// graph.a = { b: 10, e: 30, d: 100 }
// graph.b = { c: 50 }
// graph.c = { d: 10 }
// graph.e = { c: 20, d: 60 }
// graph.d = {}
console.log(findShortestWay(graph, 'a', 'd')) */

//
