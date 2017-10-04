/** @module reiter/reduce */

import curry from "__curry__";
import iter from "./iter.js";
import next from "./next.js";

/**
 * Accumulates the values of `iterable` into a single value. Returns
 * `undefined` if `iterable` is empty. `reducer` is invoked with
 * two arguments: (accumulator, value).
 *
 * @since 0.0.1
 * @function reduce
 * @param {function} reducer The function which accumulates the iterable.
 * @param {ForOfIterable} iterable The iterable.
 * @returns {*} The accumulated value.
 * @see [accumulate]{@link module:reiter/accumulate}
 * @see [reduceInto]{@link module:reiter/reduceInto}
 * @example
 *
 * reiter.reduce((a, b) => a + b, [1, 2, 3])
 * // => 6
 *
 * reiter.reduce((a, b) => a + b, [])
 * // => undefined
 */
export default curry((reducer, iterable) => {
  const iterator = iter(iterable);
  const { done, value } = next(iterator);
  if (done) return undefined;
  let accumulator = value;
  for (const value of iterator) {
    accumulator = reducer(accumulator, value);
  }
  return accumulator;
});
