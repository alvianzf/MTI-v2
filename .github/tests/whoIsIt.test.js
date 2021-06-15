const whoIsit = require('./../../whoIsIt');

test('Who is It?', () => {
  expect(whoIsit(["Joko", "Ani", "Budi"], ["Joko"])).toBe(['Joko'])
  expect(whoIsit(["Andi", "Prabowo", "Jokowi", "Roberto"], ["Sebastian", "Rachel", "Jokowi", "Prabowo"])).toBe(["Jokowi", "Prabowo"])
  expect(whoIsit(["Zoe", 'Pearson', 'Dona', 'Luis'], ["Dona", "Robert", "Forstman", "Katrina"])).toBe(['Dona'])
  expect(whoIsit(["Badu", 'Gilang', 'Silvy'], ['Amal', 'Adrian', 'Margi'])).toBe([])
  expect(whoIsit(['Ian', 'Aron', 'Udin', 'Adit', 'Natalia', 'Lia'], ['Ian', 'Aron', 'Udin', 'Adit', 'Natalia', 'Lia'])).toBe(['Ian', 'Aron', 'Udin', 'Adit', 'Natalia', 'Lia'])
})

