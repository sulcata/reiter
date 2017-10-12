# reiter
[![Build Status](https://travis-ci.org/sulcata/reiter.svg?branch=v0.1.1)]()
[![npm](https://img.shields.io/npm/v/reiter.svg)]()
[![license](https://img.shields.io/github/license/sulcata/reiter.svg)]()

Various utilities for working with [ES6 iterators and iterables](mdn).

Building on the iterator and iterable protocols, this library aims to
provide various utilities for working with iterators.

Generators for sequences of numbers such as the Fibonacci sequence and other
niche generator functions are outside the scope of this library. Methods are
expected to be applicable in a general context.

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

## Curried
All methods with multiple arguments are curried to allow for functional
programming patterns. The curry function is not particularly optimized,
so builds using Lodash's curry are available. The package exports `curry`
and `placeholder`. `_` is an alias of `placeholder`. A `compose` function
is included to aid in composing methods together.

## Documentation
More detailed documentation can be found [here](docs). Below is a short
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
