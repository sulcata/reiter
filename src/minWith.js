/** @module reiter/minWith */

import curry from "__curry__";
import iter from "./iter.js";
import next from "./next.js";

/**
 * Computes the minimum value of `iterable`. Finds the first minimal value
 * by comparing with `comparator`. Returns `undefined` if `iterable` is empty.
 * `comparator` is invoked with two arguments, (a, b), and returns positive
 * if `a > b`, negative if `a < b`, and 0 if `a === b`.
 *
 * @since 0.0.1
 * @function minWith
 * @param {function} comparator Determines the order of two values.
 * @param {ForOfIterable} iterable The iterable.
 * @returns {*} The first minimal value.
 * @see [min]{@link module:reiter/min}
 * @see [minBy]{@link module:reiter/minBy}
 * @example
 *
 * reiter.minWith((a, b) => b - a, [1, 2, 3, -4, 3, 1])
 * // => 3
 */
export default curry((comparator, iterable) => {
  const iterator = iter(iterable);
  const { done, value } = next(iterator);
  if (done) return undefined;
  let min = value;
  for (const value of iterator) {
    if (comparator(value, min) < 0) {
      min = value;
    }
  }
  return min;
});
