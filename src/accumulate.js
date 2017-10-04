/** @module reiter/accumulate */

import curry from "__curry__";
import iter from "./iter.js";
import next from "./next.js";

/**
 * Accumulates the values of `iterable`, yielding the accumulation after each
 * step. `reducer` is invoked with two arguments: (accumulator, value).
 *
 * @since 0.0.1
 * @generator
 * @function accumulate
 * @param {function} reducer The function which accumulates the iterable.
 * @param {ForOfIterable} iterable The iterable.
 * @yields {*} The next accumulated value.
 * @see [reduce]{@link module:reiter/reduce}
 * @see [reduceInto]{@link module:reiter/reduceInto}
 * @example
 *
 * reiter.accumulate((a, b) => a + b, [1, 2, 3, 4, 5])
 * // => 1, 3, 6, 10, 15
 */
export default curry(function*(reducer, iterable) {
  const iterator = iter(iterable);
  const { done, value } = next(iterator);
  if (done) return;
  let accumulator = value;
  yield accumulator;
  for (const value of iterator) {
    accumulator = reducer(accumulator, value);
    yield accumulator;
  }
});
