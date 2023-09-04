// Palindrome

function isPalindrome(line) {
  const aCodeSymbol = 'a'.charCodeAt(0)
  const zCodeSymbol = 'z'.charCodeAt(0)
  line = line
    .toLowerCase()
    .split('').filter(symbol => symbol.charCodeAt(0) >= aCodeSymbol && symbol.charCodeAt(0) <= zCodeSymbol)

  return line.join('') == line.reverse().join('')
}
/* console.log(isPalindrome("Madam, I'm, !AdAm")) */
