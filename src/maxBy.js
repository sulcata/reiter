/** @module reiter/maxBy */

import curry from "__curry__";
import iter from "./iter.js";
import next from "./next.js";

/**
 * Computes the maximum value of `iterable`. Uses the first maximal value
 * by `iteratee` generating the ranking criteria. Returns `undefined` if
 * `iterable` is empty. `iteratee` is invoked with one argument: (value).
 *
 * @since 0.0.1
 * @function maxBy
 * @param {function} iteratee Invoked per value.
 * @param {ForOfIterable} iterable The iterable.
 * @returns {*} The first maximal value.
 * @see [max]{@link module:reiter/max}
 * @see [maxWith]{@link module:reiter/maxWith}
 * @example
 *
 * reiter.maxBy(Math.abs, [1, 2, 3, -4, 3, 1])
 * // => -4
 */
export default curry((iteratee, iterable) => {
  const iterator = iter(iterable);
  const { done, value } = next(iterator);
  if (done) return undefined;
  let max = value;
  let iterateeMax = iteratee(max);
  for (const value of iterator) {
    const iterateeValue = iteratee(value);
    if (iterateeValue > iterateeMax) {
      max = value;
      iterateeMax = iterateeValue;
    }
  }
  return max;
});
