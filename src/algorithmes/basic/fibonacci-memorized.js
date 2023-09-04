// Fibonacci Memorized

const store = {}
function fibonacciMemorized(num, store) {
  if (num < 2) return 1
  if (store[num]) return store[num]
  let result = fibonacciMemorized(num - 1, store) + fibonacciMemorized(num - 2, store)
  store[num] = result
  return result
}
/* console.log(fibonacciMemorized(5, store)) */

function fibonacci(n) {
  let fibonacciSum = 0;
  const orderFib = [n];
  while (orderFib.length > 0) {
      const lastFibonacci = orderFib.pop();
      if (!lastFibonacci)
          continue;
      if (lastFibonacci === 0 || lastFibonacci === 1) {
          fibonacciSum++;
          continue;
      }
      orderFib.push(lastFibonacci - 2, lastFibonacci - 1);
  }
  return fibonacciSum;
}
function cacheDecorator(fn) {
  const cache = {};
  return function (...args) {
      const key = args.join('-');
      if (cache[key]) {
          console.log('Taken from cache!', key);
          return cache[key];
      }
      const result = fn(...args);
      cache[key] = result;
      return result;
  };
}
const fibonacciMemorized = cacheDecorator(fibonacci);
fibonacciMemorized(37); // ?.
fibonacciMemorized(37); // ?.
export {};
