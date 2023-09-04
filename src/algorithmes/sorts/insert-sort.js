// Insert sort

function insertSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = array[i]
    let minIndex = i
    for (let j = i; j < array.length; j++) {
      if (array[j] < min) {
        min = array[j]
        minIndex = j
      }
    }
    let temp = array[i]
    array[i] = min
    array[minIndex] = temp
  }
  return array
}
/* console.log(insertSort([7, 3, -100, 10, 1, -14, 18, 1, 2, 0, 9, 11, -4])) */

