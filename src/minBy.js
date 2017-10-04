/** @module reiter/minBy */

import curry from "__curry__";
import iter from "./iter.js";
import next from "./next.js";

/**
 * Computes the minimum value of `iterable`. Uses the first minimal value
 * by `iteratee` generating the ranking criteria. Returns `undefined` if
 * `iterable` is empty. `iteratee` is invoked with one argument: (value).
 *
 * @since 0.0.1
 * @function minBy
 * @param {function} iteratee Invoked per value.
 * @param {ForOfIterable} iterable The iterable.
 * @returns {*} The first minimal value.
 * @see [min]{@link module:reiter/min}
 * @see [minWith]{@link module:reiter/minWith}
 * @example
 *
 * reiter.minBy(Math.abs, [1, 2, 3, -4, 3, 1])
 * // => 1
 */
export default curry((iteratee, iterable) => {
  const iterator = iter(iterable);
  const { done, value } = next(iterator);
  if (done) return undefined;
  let min = value;
  let iterateeMin = iteratee(min);
  for (const value of iterator) {
    const iterateeValue = iteratee(value);
    if (iterateeValue < iterateeMin) {
      min = value;
      iterateeMin = iterateeValue;
    }
  }
  return min;
});
