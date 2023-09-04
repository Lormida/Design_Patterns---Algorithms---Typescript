// Merge Sort

function joinArray(array1, array2, finalArray = []) {
  finalArray = finalArray || []
  if (array1[0] <= array2[0]) finalArray.push(array1.shift())
  else finalArray.push(array2.shift())

  if ((array1.length && !array2.length) || (!array1.length && array2.length)) {
    finalArray.push(...array1, ...array2)
    return finalArray
  }
  if (array1.length == array2.length && array1.length == 0) return finalArray
  return joinArray(array1, array2, finalArray)
}

function mergeSort(array) {
  if (array.length == 1) return array

  let firstHalve = array.slice(0, array.length / 2)
  let secondHalve = array.slice(array.length / 2, array.length)

  return joinArray(mergeSort(firstHalve), mergeSort(secondHalve))
}
/* console.log(mergeSort([7, 3, -100, 10, 1, -14, 18, 1, 2, 0, 9, 11, -4])) */
