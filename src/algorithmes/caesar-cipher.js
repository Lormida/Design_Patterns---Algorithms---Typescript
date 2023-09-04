
// Caesar Cipher

function caesarCipher(str, num) {
  let strArray = str.split(' ')
  return strArray.map(word => word.split('').map(symbol => {
    if (symbol == symbol.toUpperCase()) return String.fromCharCode((symbol.charCodeAt(0) - 'a'.charCodeAt(0) + num) % 26 + 'a'.charCodeAt(0))
      .toUpperCase()
    return String.fromCharCode((symbol.charCodeAt(0) - 97 + num) % 26 + 97)
  }).join('')).join(' ')
}
/* console.log(caesarCipher('zoo Keeper', 2)) */
