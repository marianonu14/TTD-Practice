const caesarCipher = require('./caesarCipher');

test('Simple String Mod. 10', () => {
  expect(caesarCipher('roberto',10)).toBe('bylobdy');
});


test('Simple String Mod. 20', () => {
    expect(caesarCipher('roberto',20)).toBe('livylni');
  });
