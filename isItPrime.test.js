const whatTimeIsIt = require('./whatTimeIsIt');
const isPrime = require('./isPrime');

// test('outputs the correct string', () => {
//   expect(hello()).toBe("Hello world!");
// });

test('Is it prime ?', () => {
  expect(isPrime(2)).toBe('2 IS A PRIME')
  expect(isPrime(389)).toBe('389 IS A PRIME')
  expect(isPrime(973)).toBe('973 IS NOT A PRIME')
  expect(isPrime(283)).toBe('283 IS A PRIME')
  expect(isPrime(21)).toBe('21 IS NOT A PRIME')
})

test('what time is it?', () => {
  expect(whatTimeIsIt("12:00 pm")).toBe("It's noon");
  expect(whatTimeIsIt("3:49 pm")).toBe("It's three past forty nine in the afternoon");
  expect(whatTimeIsIt('12:00 am')).toBe("It's midnight");
  expect(whatTimeIsIt("5:31 am")).toBe("It's five past thirty one in the morning");
  expect(whatTimeIsIt("9:11 am")).toBe("It's nine past eleven in the morning");
})
