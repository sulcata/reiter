/** @module reiter/combinationsWithReplacement */

import curry from "__curry__";
import next from "./next.js";
import tee from "./tee.js";

function* _combinationsWithReplacement(r, set) {
  if (r === 0) {
    yield [];
  } else {
    let [iterator, prevIterator] = tee(2, set);
    let { done, value } = next(iterator);
    let prevInUseIterator;
    while (!done) {
      [prevIterator, prevInUseIterator] = tee(2, prevIterator);
      const c = _combinationsWithReplacement(r - 1, prevInUseIterator);
      for (const tuple of c) {
        tuple.unshift(value);
        yield tuple;
      }
      next(prevIterator);
      ({ done, value } = next(iterator));
    }
  }
}

/**
 * Yields all r-combinations with replacement of a `set`. Ordered pairs are
 * yielded in lexicographical order with respect to the iteration order.
 *
 * @since 0.0.1
 * @generator
 * @function combinationsWithReplacement
 * @param {?number} r The length of the combinations.
 * @param {ForOfIterable} set The set of elements.
 * @yields {Array} The next r-combination with replacement of `set`.
 * @see [combinations]{@link module:reiter/combinations}
 * @example
 *
 * reiter.combinationsWithReplacement(2, [1, 2, 3])
 * // => [1, 1], [1, 2], [1, 3], [2, 2], [2, 3], [3, 3]
 */
export default curry((r, set) => {
  if (r == null) {
    const elementsArray = [...set];
    return _combinationsWithReplacement(elementsArray.length, elementsArray);
  }
  return _combinationsWithReplacement(r, set);
});
