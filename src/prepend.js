/** @module reiter/prepend */

import curry from "__curry__";

/**
 * Prepends `value` to the beginning of `iterable`.
 *
 * @since 0.0.1
 * @generator
 * @function prepend
 * @param {*} value The value to be prepended.
 * @param {ForOfIterable} iterable The iterable.
 * @yields {*} `value` and then the values of `iterable`.
 * @see [append]{@link module:reiter/append}
 * @see [chain]{@link module:reiter/chain}
 * @example
 *
 * reiter.prepend(1, [2, 3, 4])
 * // => 1, 2, 3, 4
 */
export default curry(function*(value, iterable) {
  yield value;
  yield* iterable;
});
