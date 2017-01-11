const r = require('./record-access');

describe('record-access', function () {
  it('should access properties', function () {
    const bill = { name: 'Gates', born: 1955 };
    expect(r.name(bill)).toBe('Gates');
    expect(r.born(bill)).toBe(1955);
  });

  it('should fail gracefully when not found', function () {
    const bill = { unknown: 'Gates' };
    expect(r.name(bill)).toBeUndefined();
  });

  it('should fail gracefully when object is undefined', function () {
    expect(r.name(void 0)).toBeUndefined();
  });

  it('should support destructuring', function () {
    const { name } = r;
    const bill = { name: 'Gates', born: 1955 };
    expect(r.name(bill)).toBe('Gates');
  });

  it('should support accessor with unvalid variable names', function () {
    const bill = { ['0name']: 'Gates' };
    expect(r['0name'](bill)).toBe('Gates');
  });

  it('should support being passed in as functions to combinators', function () {
    const people = [
      { name: 'Jobs' },
      { name: 'Gates' }
    ];
    const { name } = r;
    expect(people.map(name)).toEqual(['Jobs', 'Gates']);
  });
});
