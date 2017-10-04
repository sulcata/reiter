/** @module reiter/reduceInto */

import curry from "__curry__";
import prepend from "./prepend.js";
import reduce from "./reduce.js";

/**
 * Accumulates the values of `iterable` into `accumulator`. `reducer` is
 * invoked with two arguments: (accumulator, value).
 *
 * @since 0.0.1
 * @function reduceInto
 * @param {function} reducer The function which accumulates the iterable.
 * @param {*} accumulator The initial value to reduce into.
 * @param {ForOfIterable} iterable The iterable.
 * @returns {*} The accumulated value.
 * @see [accumulate]{@link module:reiter/accumulate}
 * @see [reduce]{@link module:reiter/reduce}
 * @example
 *
 * reiter.reduceInto((a, b) => a + b, 0, [1, 2, 3])
 * // => 6
 *
 * reiter.reduceInto((a, b) => a + b, 0, [])
 * // => 0
 */
export default curry((reducer, accumulator, iterable) =>
  reduce(reducer, prepend(accumulator, iterable))
);
