/** @module reiter/chain */

import curry from "__curry__";

/**
 * Chains `iterable1` and `iterable2` together.
 *
 * @since 0.0.1
 * @generator
 * @function chain
 * @param {ForOfIterable} iterable1 The iterable at the beginning.
 * @param {ForOfIterable} iterable2 The iterable on the end.
 * @yields {*} `iterable1` followed by `iterable2`.
 * @see [append]{@link module:reiter/append}
 * @see [prepend]{@link module:reiter/prepend}
 * @example
 *
 * reiter.chain([1, 2], [3, 4])
 * // => 1, 2, 3, 4
 */
export default curry(function*(iterable1, iterable2) {
  yield* iterable1;
  yield* iterable2;
});
