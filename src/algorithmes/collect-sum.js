// Collect sum

function collectSum(array, sum) {
  let results = []
  let originDict = {}
  array.forEach(digit => {
    if (!originDict[digit]) originDict[digit] = 1
    else originDict[digit]++
  })

  array.forEach(digit => {
    if (originDict[digit] && array.includes(sum - digit)) {
      results.push([digit, sum - digit])
      originDict[digit]--
      originDict[sum - digit]--
    }
  })
  return results
}
/* console.log(collectSum([1, 5, 2, 3, 4, 7, 6, 5], 9)) */
