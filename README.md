# `records-access`: Function accessors for objects

In elm you can access properties on records as `bill.name` and by using the accessor as a function by starting with a `.`, e.g. `.name bill`. This allows for easier [composing](https://en.wikipedia.org/wiki/Function_composition_(computer_science)), things like [point-free style](https://en.wikipedia.org/wiki/Tacit_programming) and using in `map`, `filter`, `reduce`, etc.

See how it works in Elm: https://guide.elm-lang.org/core_language.html#records

```elm
bill = { name = "Gates", age = 57 }
-- { age = 57, name = "Gates" }

.name bill
-- "Gates"
```

---

We can't do strictly the same with staring on `.` in JavaScript due to grammar, but we can do something similar with [JavaScript Proxy](https://github.com/mikaelbr/proxy-fun):

```js
import ra from 'record-access';
const { name } = ra;
// or directly, if using node:
// const { name } = require('record-access');

const bill = { name: "Gates", age: 57 };
name(bill); //=> val 'Gates' : string

// or without destructuring:
ra.name(bill); //=> val 'Gates' : string
```

We can use it similarly in things like `map`:
```js
const people = [
  { name: 'Jobs' },
  { name: 'Gates' }
];

people.map(name); //=> ['Jobs', 'Gates']
```


## Contribute

Contributions are very welcome, and I'll do my best to help out. Clone the repo by doing

```
git clone https://github.com/mikaelbr/record-access
```

Fix bug or develop feature and add tests. Run tests by installing dependencies (`npm install`) and run:

```
npm test
```
