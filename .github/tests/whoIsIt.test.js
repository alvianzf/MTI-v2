const whoIsit = require('./../../whoIsIt');

it('Who is It?', () => {
  expect(whoIsit(["Joko", "Ani", "Budi"], ["Joko"])).toEqual(["Joko"])
  expect(whoIsit(["Andi", "Prabowo", "Jokowi", "Roberto"], ["Sebastian", "Rachel", "Jokowi", "Prabowo"]).sort()).toEqual(["Jokowi", "Prabowo"].sort())
  expect(whoIsit(["Zoe", 'Pearson', 'Dona', 'Luis'], ["Dona", "Robert", "Forstman", "Katrina"]).sort()).toEqual(['Dona'])
  expect(whoIsit(["Badu", 'Gilang', 'Silvy'], ['Amal', 'Adrian', 'Margi'])).toEqual([])
  expect(whoIsit(['Ian', 'Aron', 'Udin', 'Adit', 'Natalia', 'Lia'], ['Ian', 'Aron', 'Udin', 'Adit', 'Natalia', 'Lia']).sort()).toEqual(['Ian', 'Aron', 'Udin', 'Adit', 'Natalia', 'Lia'].sort())
})

