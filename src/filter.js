/** @module reiter/filter */

import curry from "__curry__";

/**
 * Skips all values in `iterable` for which predicate returns a falsey value.
 * `predicate` is invoked with one argument: (value)
 *
 * @since 0.0.1
 * @generator
 * @function filter
 * @param {function} predicate Invoked per value.
 * @param {ForOfIterable} iterable The iterable.
 * @yields {*} The next value passing `predicate`.
 * @see [reject]{@link module:reiter/reject}
 * @example
 *
 * reiter.filter(n => n % 2, [1, 2, 3, 4])
 * // => 1, 3
 */
export default curry(function*(predicate, iterable) {
  for (const value of iterable) {
    if (predicate(value)) yield value;
  }
});
