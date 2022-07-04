const capitalize = require('./capitalize');

test('Simple String', () => {
  expect(capitalize("hola")).toBe("Hola");
});