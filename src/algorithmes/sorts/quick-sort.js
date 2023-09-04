// Quick sort

function quickSort(array) {
  if (array.length < 2) return array

  let lessArray = []
  let largerArray = []
  let mediumElement = array[Math.floor(array.length / 2)]

  array.forEach(el => {
    if (el != mediumElement) {
      if (el >= mediumElement) largerArray.push(el)
      else lessArray.push(el)
    }
  })
  return [...quickSort(lessArray), mediumElement, ...quickSort(largerArray)]
}
/* console.log(quickSort([7, 3, -100, 10, 1, -14, 18, 1, 2, 0, 9, 11, -4])) */
