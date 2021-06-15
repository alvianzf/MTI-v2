const hello = require('./hello');
const isPrime = require('./isPrime');

// test('outputs the correct string', () => {
//   expect(hello()).toBe("Hello world!");
// });

test('Is 2 prime ?', () => {
  expect(isPrime(2).toBe('2 IS A PRIME'))
})

test('Is 283 prime ?', () => {
  expect(isPrime(2).toBe('283 IS A PRIME'))
})
test('Is 21 prime ?', () => {
  expect(isPrime(21).toBe('21 IS NOT A PRIME'))
})
test('Is 389 prime ?', () => {
  expect(isPrime(389).toBe('389 IS A PRIME'))
  expect(isPrime(973).toBe('973 IS NOT A PRIME'))
})