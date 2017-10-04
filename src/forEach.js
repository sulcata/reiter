/** @module reiter/forEach */

import curry from "__curry__";

/**
 * Calls `iteratee` for each value of `iterable`. `iteratee` is invoked
 * with one argument: (value).
 *
 * @since 0.0.1
 * @function forEach
 * @param {function} iteratee Invoked per value.
 * @param {ForOfIterable} iterable The iterable.
 * @returns {void}
 * @example
 *
 * reiter.forEach(a => console.log(a), [1, 2, 3])
 * // => 1
 * // => 2
 * // => 3
 */
export default curry((iteratee, iterable) => {
  for (const value of iterable) {
    iteratee(value);
  }
});
