/** @module reiter/combinations */

import curry from "__curry__";
import iter from "./iter.js";
import next from "./next.js";
import tee from "./tee.js";

/**
 * Yields all r-combinations of `set`. Ordered pairs are yielded in
 * lexicographical order according to the iteration order.
 *
 * @since 0.0.1
 * @generator
 * @function combinations
 * @param {?number} r The length of the combinations.
 * @param {ForOfIterable} set The set of elements.
 * @yields {Array} The next r-combination of `set`.
 * @see [combinationsWithReplacement]{@link module:reiter/combinationsWithReplacement}
 * @example
 *
 * reiter.combinations(2, [1, 2, 3])
 * // => [1, 2], [1, 3], [2, 3]
 */
export default curry(function* combinations(r, set) {
  if (r === 0) {
    yield [];
  } else if (r == null) {
    yield [...set];
  } else {
    let iterator = iter(set);
    let inUseIterator;
    let { done, value } = next(iterator);
    while (!done) {
      [iterator, inUseIterator] = tee(2, iterator);
      for (const tuple of combinations(r - 1, inUseIterator)) {
        tuple.unshift(value);
        yield tuple;
      }
      ({ done, value } = next(iterator));
    }
  }
});
