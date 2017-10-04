/** @module reiter/cycleN */

import curry from "__curry__";

/**
 * Cycles through `iterable` n-times. Will not cycle when `n === 0`.
 *
 * @since 0.0.1
 * @generator
 * @function cycleN
 * @param {number} n The number of cycles.
 * @param {ForOfIterable} iterable The iterable.
 * @yields {*} The next item in the n-cycle of `iterable`.
 * @see [cycle]{@link module:reiter/cycle}
 * @example
 *
 * reiter.cycleN(2, [1, 2, 3])
 * // => 1, 2, 3, 1, 2, 3
 */
export default curry(function*(n, iterable) {
  if (n === 0) return;
  const saved = [];
  for (const value of iterable) {
    yield value;
    saved.push(value);
  }
  for (let i = 1; i < n; i++) {
    yield* saved;
  }
});
