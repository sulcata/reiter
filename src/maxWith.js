/** @module reiter/maxWith */

import curry from "__curry__";
import iter from "./iter.js";
import next from "./next.js";

/**
 * Computes the maximum value of `iterable`. Finds the first maximal value
 * by comparing with `comparator`. Returns `undefined` if `iterable` is empty.
 * `comparator` is invoked with two arguments, (a, b), and returns positive
 * if `a > b`, negative if `a < b`, and 0 if `a === b`.
 *
 * @since 0.0.1
 * @function maxWith
 * @param {function} comparator Determines the order of two values.
 * @param {ForOfIterable} iterable The iterable.
 * @returns {*} The first maximal value.
 * @see [max]{@link module:reiter/max}
 * @see [maxBy]{@link module:reiter/maxBy}
 * @example
 *
 * reiter.maxWith((a, b) => b - a, [1, 2, 3, -4, 3, 1])
 * // => -4
 */
export default curry((comparator, iterable) => {
  const iterator = iter(iterable);
  const { done, value } = next(iterator);
  if (done) return undefined;
  let max = value;
  for (const value of iterator) {
    if (comparator(value, max) > 0) {
      max = value;
    }
  }
  return max;
});
