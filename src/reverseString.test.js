const reverseString = require('./reverseString');

test('hola equal aloh', () => {
  expect(reverseString('hola')).toBe('aloh');
});

test('HELLO equal OLLEH', () => {
    expect(reverseString('HELLO')).toBe('OLLEH');
  });