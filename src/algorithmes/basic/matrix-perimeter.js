const matrix = [
  [0, 0, 0],
  [1, 1, 0],
  [0, 1, 0],
  // [1,0,0,1,0],
  // [1,0,0,1,0],
  // [0,0,0,1,0],
  // [1,1,0,1,0],
  // [0,1,0,0,0],
]

function findAdjacent(matrix, x, y) {
  let removeEdge = 0
  // Check vertically adjacent
  if (matrix[y + 1][x] === 1)
    removeEdge += 2

  else if (matrix[y][x + 1] === 1)
    removeEdge += 2

  return removeEdge
}
function calcPerimeter(matrix) {
  let totalEdge = 0

  for (let x = 0; x < matrix[0].length - 1; x++) {
    for (let y = 0; y < matrix.length - 1; y++) {
      if (matrix[y][x] === 1) {
        totalEdge += 4 // ?
        totalEdge -= findAdjacent(matrix, x, y)
      }
    }
  }
  return totalEdge
}

calcPerimeter(matrix) // ?
