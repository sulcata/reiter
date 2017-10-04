/** @module reiter/cartesian */

import curry from "__curry__";

/**
 * Yields the cartesian product of `set1` and `set2`. Ordered pairs are
 * yielded in lexicographical order according to the iteration order.
 *
 * @since 0.0.1
 * @generator
 * @function cartesian
 * @param {ForOfIterable} set1 The first set of elements.
 * @param {ForOfIterable} set2 The second set of elements.
 * @yields {Array<*, *>} The next ordered pair between `set1` and `set2`.
 * @see [cartesianAll]{@link module:reiter/cartesianAll}
 * @example
 *
 * reiter.cartesian("abc", [1, 2, 3])
 * // => ["a", 1], ["a", 2], ["a", 3],
 * //    ["b", 1], ["b", 2], ["b", 3],
 * //    ["c", 1], ["c", 2], ["c", 3]
 */
export default curry(function*(set1, set2) {
  for (const value1 of set1) {
    for (const value2 of set2) {
      yield [value1, value2];
    }
  }
});
