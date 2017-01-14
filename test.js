const ra = require('./record-access');

function compose (a, b) {
  return (...args) => a(b(...args));
}

describe('record-access', function () {
  it('should access properties', function () {
    const bill = { name: 'Gates', born: 1955 };
    expect(ra.name(bill)).toBe('Gates');
    expect(ra.born(bill)).toBe(1955);
  });

  it('should access properties on nested objects', function () {
    const bill = { name: { name: 'Gates' }, born: 1955 };
    var nameOfName = compose(ra.name, ra.name);
    expect(nameOfName(bill)).toBe('Gates');
  });

  it('should fail gracefully when not found', function () {
    const bill = { unknown: 'Gates' };
    expect(ra.name(bill)).toBeUndefined();
  });

  it('should fail gracefully when object is undefined', function () {
    expect(ra.name(void 0)).toBeUndefined();
  });

  it('should fail gracefully when passing non-object', function () {
    expect(ra.name('dsa')).toBeUndefined();
  });

  it('should support destructuring', function () {
    const { name } = ra;
    const bill = { name: 'Gates', born: 1955 };
    expect(name(bill)).toBe('Gates');
  });

  it('should support accessor with unvalid variable names', function () {
    const bill = { ['0name']: 'Gates' };
    expect(ra['0name'](bill)).toBe('Gates');
  });

  it('should support being passed in as functions to combinators', function () {
    const people = [
      { name: 'Jobs' },
      { name: 'Gates' }
    ];
    const { name } = ra;
    expect(people.map(name)).toEqual(['Jobs', 'Gates']);
  });
});
