// Binary Search

function binarySearch(array, value) {
  let mediumIdx = Math.floor(array.length / 2)
  let middleValue = array[mediumIdx]

  if (middleValue == value) return value
  if (array.length == 1) return null

  if (value < middleValue) {
    return binarySearch(array.slice(0, mediumIdx), value)
  } else if (value > middleValue) {
    return binarySearch(array.slice(mediumIdx, array.length), value)
  }
}
/* console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56)) */
