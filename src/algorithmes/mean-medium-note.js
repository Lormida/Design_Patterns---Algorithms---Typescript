// Mean Median Mode

function MeanMedianMode(array) {
  const getMean = array => (array.reduce((prev, cur) => prev + cur, 0) / array.length).toFixed(2)

  function getMedian(array) {
    const arraySorted = array.sort((a, b) => a - b)
    if (array.length % 2 == 1) return arraySorted[Math.floor(array.length / 2)]
    let median1 = arraySorted[array.length / 2]
    let median2 = arraySorted[array.length / 2 - 1]
    return (median1 + median2) / 2
  }
  function getMode(array) {
    let objectDict = {}
    array.forEach(word => {
      if (!objectDict[word]) objectDict[word] = 0
      objectDict[word]++
    })

    let maxFrequency = 0
    let wordFrequency = []
    array.forEach(word => {
      if (objectDict[word] > maxFrequency) {
        maxFrequency = objectDict[word]
        wordFrequency = [word]
      } else if (objectDict[word] == maxFrequency && !wordFrequency.includes(word)) {
        wordFrequency.push(word)
      }
    })
    if (wordFrequency.length == array.length) maxFrequency = null
    console.log(objectDict)
    return wordFrequency

  }
  return {
    'mean': getMean(array),
    'median': getMedian(array),
    'mode': getMode(array),
  }
}
/* console.log(MeanMedianMode([10, 23, 10, 15, 23, 9])) */
