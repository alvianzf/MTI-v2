const hello = require('./hello');
const isPrime = require('./isPrime');

// test('outputs the correct string', () => {
//   expect(hello()).toBe("Hello world!");
// });

test('Is it prime ?', () => {
  console.log("2")
  expect(isPrime(2)).toBe('2 IS A PRIME')
  console.log("389")
  expect(isPrime(389)).toBe('389 IS A PRIME')
  console.log("973")
  expect(isPrime(973)).toBe('973 IS NOT A PRIME')
  console.log("283")
  expect(isPrime(283)).toBe('283 IS A PRIME')
  console.log("21")
  expect(isPrime(21)).toBe('21 IS NOT A PRIME')
})