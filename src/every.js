/** @module reiter/every */

import curry from "__curry__";

/**
 * Checks if `predicate` returns a truthy value for every value of
 * `iterable`. Iteration ceases once `predicate` returns a falsey value.
 * `predicate` is invoked with one argument: (value)
 *
 * @since 0.0.1
 * @function every
 * @param {function} predicate Invoked per value.
 * @param {ForOfIterable} iterable The iterable.
 * @returns {boolean} `true` if all values pass `predicate`, else `false`.
 * @see [some]{@link module:reiter/some}
 * @example
 *
 * reiter.every(n => n % 2, [1, 3, 5, 7])
 * // => true
 *
 * reiter.every(n => n % 2, [1, 3, 4, 5, 7])
 * // => false
 */
export default curry((predicate, iterable) => {
  for (const value of iterable) {
    if (!predicate(value)) return false;
  }
  return true;
});
