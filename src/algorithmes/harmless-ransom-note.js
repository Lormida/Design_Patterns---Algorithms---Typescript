// Harmless Ransom Note

function harmlessRansomNote(noteText, magazineText) {
  let noteTextArray = noteText.split(' ')
  let magazineTextArray = magazineText.split(' ')
  let sourceDict = {}
  magazineTextArray.forEach(word => {
    if (!sourceDict[word]) sourceDict[word] = 1
    else {
      sourceDict[word]++
    }
  })
  for (let word of noteTextArray) {
    if (!sourceDict[word] || --sourceDict[word] < 0) return false
  }
  console.log(sourceDict)
  return true
}
/* console.log(harmlessRansomNote('from this is a secret note for you from a secret admirer',
  'puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited')) */

