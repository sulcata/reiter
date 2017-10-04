/** @module reiter/map */

import curry from "__curry__";

/**
 * Maps each value in `iterable` by running it through `iteratee`. `iteratee`
 * is invoked with one argument: (value).
 *
 * @since 0.0.1
 * @generator
 * @function map
 * @param {function} iteratee Invoked per value.
 * @param {ForOfIterable} iterable The iterable.
 * @yields {*} The next mapped value.
 * @example
 *
 * reiter.map(x => 2 * x, [1, 2, 3])
 * // => 2, 4, 6
 */
export default curry(function*(iteratee, iterable) {
  for (const value of iterable) {
    yield iteratee(value);
  }
});
