// BreadthSearch

function breadthSearch(graph, start, end) {
  let queue = [start]
  while (queue.length > 0) {
    let departurePoint = queue.shift()
    if (graph[departurePoint].includes(end)) return true
    graph[departurePoint].forEach(point => queue.push(point))
  }
  return false
}
/* const graph = {}
graph.a = ['b']
graph.b = ['c']
graph.c = ['d']
graph.d = ['e']
graph.e = ['d']
graph.f = ['a']
console.log(breadthSearch(graph, 'a', 'e')) */
