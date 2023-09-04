// Max profit

function determineProfit(array) {
  let minPrice = array[0]
  let tomorrowPrice = array[1]
  let maxProfit = -1
  for (let i = 0; i < array.length - 1; i++) {
    tomorrowPrice = array[i + 1]
    if (tomorrowPrice - array[i] > maxProfit) {
      if (array[i] < minPrice) minPrice = array[i]
      maxProfit = tomorrowPrice - minPrice
    } else if (array[i + 1] - minPrice > maxProfit) maxProfit = tomorrowPrice - minPrice
  }
  return maxProfit

}
/* console.log(determineProfit([125, 50, 6, 10, 33, 25, 1])) */
