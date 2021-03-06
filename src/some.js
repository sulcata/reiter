/** @module reiter/some */

import curry from "__curry__";

/**
 * Checks if `predicate` returns a truthy value for some value of
 * `iterable`. Iteration ceases once `predicate` returns a truthy value.
 * `predicate` is invoked with one argument: (value).
 *
 * @since 0.0.1
 * @function some
 * @param {function} predicate Invoked per value.
 * @param {ForOfIterable} iterable The iterable.
 * @returns {boolean} `true` if any values pass `predicate`, else `false`.
 * @see [every]{@link module:reiter/every}
 * @example
 *
 * reiter.some(n => n % 2, [1, 3, 4, 5, 7])
 * // => true
 *
 * reiter.some(n => n % 2, [1, 3, 5, 7])
 * // => false
 */
export default curry((predicate, iterable) => {
  for (const value of iterable) {
    if (predicate(value)) return true;
  }
  return false;
});
