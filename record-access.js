function noop () { };
module.exports = new Proxy({}, {
  get (target, property) {
    if (!property) return noop;
    return obj => obj && obj[property];
  }
});
