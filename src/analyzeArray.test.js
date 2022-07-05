const analyze = require('./analyzeArray');

test('average array [1,8,3,4,2,6] is 4', () => {
    expect(analyze.average([1,8,3,4,2,6])).toBe(4);
  });

  test('min array [1,8,3,4,2,6] is 1', () => {
    expect(analyze.min([1,8,3,4,2,6])).toBe(1);
  });

  test('max array [1,8,3,4,2,6] is 8', () => {
    expect(analyze.max([1,8,3,4,2,6])).toBe(8);
  });

  test('length array [1,8,3,4,2,6] is 6', () => {
    expect(analyze.lengtho([1,8,3,4,2,6])).toBe(6);
  });