/** @module reiter/find */

import curry from "__curry__";

/**
 * Finds the first value of `iterable` for which `predicate` returns
 * a truthy value. `predicate` is invoked with one argument: (value).
 *
 * @since 0.0.1
 * @function find
 * @param {function} predicate Invoked per value.
 * @param {ForOfIterable} iterable The iterable.
 * @returns {*} The first value in `iterable` satisfying `predicate`, otherwise `undefined`.
 * @example
 *
 * reiter.find(n => n % 2, [1, 3, 4, 5, 8, 7])
 * // => 4
 *
 * reiter.find(n => n % 2, [1, 3, 5, 7])
 * // => undefined
 */
export default curry((predicate, iterable) => {
  for (const value of iterable) {
    if (predicate(value)) return value;
  }
  return undefined;
});
