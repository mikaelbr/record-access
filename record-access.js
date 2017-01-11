function noop () { };
const r = new Proxy({}, {
  get (target, property) {
    if (!property) return noop;
    // if (!/[a-z\$\_]/i.test(property[0])) {
    //   throw new TypeError('Property accessors must start with valid sign');
    // }
    return obj => obj && obj[property];
  }
});

module.exports = r;
