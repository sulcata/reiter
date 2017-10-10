/** @module reiter/take */

import curry from "__curry__";
import iter from "./iter.js";
import next from "./next.js";

/**
 * Yields the first `n` values in `iterable`.
 *
 * @since 0.0.4
 * @generator
 * @function take
 * @param {number} n The number of values to take.
 * @param {ForOfIterable} iterable The iterable.
 * @yields {*} The next value of the first `n` values.
 * @see [takeUntil]{@link module:reiter/takeUntil}
 * @see [takeWhile]{@link module:reiter/takeWhile}
 * @example
 *
 * reiter.take(2, [1, 2, 3, 4, 5])
 * // => 1, 2
 */
export default curry(function*(n, iterable) {
  const iterator = iter(iterable);
  for (let i = 0; i < n; i++) {
    const { done, value } = next(iterator);
    if (done) break;
    yield value;
  }
});
