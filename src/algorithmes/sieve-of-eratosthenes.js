// Sieve of Eratosthenes

function primeSieve(n) {
  let array = []
  for (let i = 1; i < n; i++) array[i] = i + 1

  for (let i = 2; i < Math.sqrt(n); i++) {
    array = array.map((num, index) => {
      if (index + 1 >= i ** 2 && num % i == 0) return false
      return num
    })
  }
  return array.filter(num => num != false)

}
/* console.log(primeSieve(120)) */
