/** @module reiter/findLast */

import curry from "__curry__";

/**
 * Finds the last value of `iterable` for which `predicate` returns
 * a truthy value. `predicate` is invoked with one argument: (value).
 *
 * @since 0.0.4
 * @function findLast
 * @param {function} predicate Invoked per value.
 * @param {ForOfIterable} iterable The iterable.
 * @returns {*} The last value in `iterable` satisfying `predicate`, otherwise `undefined`.
 * @example
 *
 * reiter.findLast(n => n % 2, [1, 3, 4, 5, 8, 7])
 * // => 8
 *
 * reiter.findLast(n => n % 2, [1, 3, 5, 7])
 * // => undefined
 */
export default curry((predicate, iterable) => {
  let lastFound;
  for (const value of iterable) {
    if (predicate(value)) lastFound = value;
  }
  return lastFound;
});
