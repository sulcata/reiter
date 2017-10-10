/** @module reiter/drop */

import curry from "__curry__";
import advance from "./internal/advance.js";
import iter from "./iter.js";

/**
 * Yields all but the first `n` values in `iterable`.
 *
 * @since 0.0.4
 * @generator
 * @function drop
 * @param {number} n The number of values to drop.
 * @param {ForOfIterable} iterable The iterable.
 * @yields {*} The next value after the first `n` values.
 * @see [dropUntil]{@link module:reiter/dropUntil}
 * @see [dropWhile]{@link module:reiter/dropWhile}
 * @example
 *
 * reiter.drop(2, [1, 2, 3, 4, 5])
 * // => 3, 4, 5
 */
export default curry((n, iterable) => {
  const iterator = iter(iterable);
  advance(iterator, n);
  return iterator;
});
