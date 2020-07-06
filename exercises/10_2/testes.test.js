 
const random = require('./service');

//definir retorno padrao 10, testar se foi chamada, qual retorno, xchamada

test("#rng", () => {
  random.rng = jest.fn().mockReturnValue(10);

  random.rng();
  expect(random.rng).toHaveBeenCalled();
  expect(random.rng()).toBe(10);
  expect(random.rng).toHaveBeenCalledTimes(2);
});