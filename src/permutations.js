/** @module reiter/permutations */

import curry from "__curry__";
import chain from "./chain.js";
import iter from "./iter.js";
import next from "./next.js";
import tee from "./tee.js";

/**
 * Yields all r-permutations of `set`. Ordered pairs are yielded in
 * lexicographical order according to the iteration order.
 *
 * @since 0.0.1
 * @generator
 * @function permutations
 * @param {?number} r The length of the combinations.
 * @param {ForOfIterable} set The set of elements.
 * @yields {Array} The next r-permutation of `set`.
 * @example
 *
 * reiter.permutations(2, [1, 2, 3])
 */
export default curry(function* permutations(r, pool) {
  if (r === 0) {
    yield [];
  } else {
    const usedValues = [];
    let iterator = iter(pool);
    let tempIterator;
    let { done, value } = next(iterator);
    if (done && r == null) {
      yield [];
    } else {
      while (!done) {
        [iterator, tempIterator] = tee(2, iterator);
        const inUseIterator = chain(usedValues, tempIterator);
        const p = permutations(r == null ? r : r - 1, inUseIterator);
        for (const tuple of p) {
          tuple.unshift(value);
          yield tuple;
        }
        usedValues.push(value);
        ({ done, value } = next(iterator));
      }
    }
  }
});
