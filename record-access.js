function noop () { };
module.exports = new Proxy({}, {
  get (target, property) {
    if (!property) return noop;
    return function getAccessor (obj) {
      return (typeof obj !== 'object') ? void 0 : obj[property];
    };
  }
});
