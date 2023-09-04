// Reverse Array In Place

function reverseArrayInPlace(arr) {
  let newArray = []
  let l = arr.length
  for (let i = 0; i < l / 2; i++) {
    newArray[i] = arr[l - i - 1]
    newArray[l - i - 1] = arr[i]
  }
  console.log(newArray)

}
/* reverseArrayInPlace([1, 2, 3, 4, 5]) */
