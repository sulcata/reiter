/** @module reiter/append */

import curry from "__curry__";

/**
 * Appends `value` to the end of `iterable`.
 *
 * @since 0.0.1
 * @generator
 * @function append
 * @param {*} value The value to be appended.
 * @param {ForOfIterable} iterable The iterable.
 * @yields {*} The values of `iterable` and then `value`.
 * @see [prepend]{@link module:reiter/prepend}
 * @see [chain]{@link module:reiter/chain}
 * @example
 *
 * reiter.append(4, [1, 2, 3])
 * // => 1, 2, 3, 4
 */
export default curry(function*(value, iterable) {
  yield* iterable;
  yield value;
});
