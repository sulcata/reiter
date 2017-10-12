# reiter
[![Build Status](https://travis-ci.org/sulcata/reiter.svg?branch=v0.1.1)]()
[![npm](https://img.shields.io/npm/v/reiter.svg)]()
[![license](https://img.shields.io/github/license/sulcata/reiter.svg)]()

Various utilities for working with [Iterators and Iterables][mdn].

Building on the iterator and iterable protocols, this library aims to
provide various utilities for working with iterators.

To install, run either `yarn add reiter` or `npm install reiter`.
Including it is simple:
```js
// Node.js
const reiter = require("reiter");

// Environments with EcmaScript modules such as Babel and Webpack.
import * as reiter from "reiter";
```

## Motivation
Normal functions on collections such as map and filter will construct entire
arrays for each intermediate result. For small arrays of maybe 20 or so
elements this will likely be very fast, possibly faster than using iterators
depending on run-time optimizations. For larger collections, intermediate
representations can be avoided, only applying methods to each element as it
is needed.

Arrays and other finite collections also have the disadvantage of not being
able to deal with endless sequences, due to their inherently lazy evaluation.

## Curried
All methods with multiple arguments are curried to allow for functional
programming patterns. The curry function is not particularly optimized,
so builds using Lodash's curry are available. The package exports `curry`
and `placeholder`. `_` is an alias of `placeholder`. A `compose` function
is included to aid in composing methods together.

## Different Builds:
By default the UMD bundle (without Lodash's curry) will be loaded by require.

Each build will have a UMD bundle (`index.js`), a CommonJS bundle
(`index.common.js`), and an EcmaScript module bundle (`index.esm.js`). Builds
with the regular built-in curry function are in `reiter/dist/`, while builds
referencing the Lodash curry function are in `reiter/dist/lodash/`.

All Lodash builds will reference the curry function from the `lodash` package
on npm. If you are planning to use this build, be sure to have already
installed Lodash.

## Examples
Iterate over values and indices cleanly without a traditional for loop:
```js
for (const [index, value] of reiter.enumerate([1, 2, 3])) {
  console.log(`[${index}]: value`);
}
// [0]: 1
// [1]: 2
// [2]: 3
```

Take the first three odds and then take the first three evens from a single
iterator created by the count method. Only 6 values are ever created. Note
that this could be done more simply with `odds = reiter.count(1, 2)` and
`evens = reiter.count(2, 2)`. This is just a simple proof of concept.
```js
const naturals = reiter.count(1, 1);
const [naturals1, naturals2] = reiter.tee(2, naturals);
// partial applications
const filterOdds = reiter.filter(n => n % 2 === 1);
const filterEvens = reiter.filter(n => n % 2 === 0);
const odds = filterOdds(naturals1);
const evens = filterEvens(naturals2);
console.log(...reiter.take(3, odds));
console.log(...reiter.take(3, evens));
// 1, 3, 5
// 2, 4, 6
```

Avoid deeply nested for loops with `cartesianAll` and other
combinatorial functions.
```js
const domain = range(-10, 11, 1); // stop value is excluded
for (const [x, y, z] of reiter.cartesianAll(reiter.tee(3, domain)) {
  // do something with each coordinate pair ...
}
```

## Caveats
For better or worse, iterators are unidirectional and cannot be used more
than once. Once an iterator is passed to a method, one should consider it
exhausted and no longer attempt to use it. If you must iterate an iterator
multiple times, consider using `tee` or `reiter`, e.g.:
```js
// Iterator copies of iterator.
const [copy1, copy2, copy3] = reiter.tee(3, iterator);

// A reiterable collection created from iterator.
const reiterable = reiter.reiter(iterator);
```

When passing iterable collections such as Arrays, Sets, and Maps to methods
of reiter, one should not mutate the collections until after all iterators
are not in-use. Mutating the collections could result in undefined behavior.

## Documentation
More detailed documentation can be found [here][docs]. Below is a short
overview organized into groups.

### General
- `accumulate`
- `append`
- `chain`
- `chunk`
- `count`
- `cycle`
- `cycleN`
- `enumerate`
- `flatten`
- `flattenDeep`
- `flattenDepth`
- `forEach`
- `fromArrayLike`
- `fromPairs`
- `iter`
- `map`
- `next`
- `partition`
- `prepend`
- `range`
- `reduce`
- `reduceInto`
- `reiter`
- `repeat`
- `repeatN`
- `tee`
- `toPairs`
- `unzip`
- `zip`

### Predicates
- `every`
- `includes`
- `isArrayLike`
- `isIterable`
- `some`

### Selection
- `compact`
- `drop`
- `dropUntil`
- `dropWhile`
- `exclude`
- `filter`
- `find`
- `findLast`
- `include`
- `nth`
- `reject`
- `slice`
- `take`
- `takeUntil`
- `takeWhile`
- `uniq`
- `uniqBy`
- `uniqWith`

### Math
- `max`
- `maxBy`
- `maxWith`
- `min`
- `minBy`
- `minWith`
- `product`
- `sum`

### Combinatorial
- `cartesian`
- `cartesianAll`
- `combinations`
- `combinationsWithReplacement`
- `permutations`
- `powerSet`

### Functional Programming Helpers
- `compose`
- `curry`
- `placeholder` / `_`

[mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
[docs]: https://sulcata.github.io/reiter/
