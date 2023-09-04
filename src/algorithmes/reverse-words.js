// Reverse words

function reverseWords(phrase) {
  let modifiedPhrase = ''
  for (let i = 0; i < phrase.length; i++) {
    modifiedPhrase += phrase[phrase.length - i - 1]
  }
  return modifiedPhrase
}
/* console.log(reverseWords('Coding JavaScript')) */


