const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

//Implementar 2 pruebas unitarias para la función divide().

test('La division de 160 entre 2 es igual a 80', () => {
  expect(calculator.divide(160, 2)).toBe(80);
});

test('La division de 140 entre 10 es igual a 14', () => {
  expect(calculator.divide(140, 10)).toBe(14);
});

//Implementar 2 pruebas unitarias para la función multiply().

test('La multiplicacion de 12 entre 10 es igual a 120', () => {
  expect(calculator.multiply(12, 10)).toBe(120);
});

test('La multiplicacion de 7 entre 9 es igual a 63', () => {
  expect(calculator.multiply(7, 9)).toBe(63);
});
