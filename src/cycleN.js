import curry from "__curry__";

/**
 * Cycles through `iterable` n-times. Will not cycle when `n === 0`.
 *
 * @since 0.0.1
 * @curried
 * @param {number} n The number of cycles.
 * @param {Iterable|Iterator} iterable The iterable.
 * @returns {Iterator} n-cycles of `iterable`.
 * @example
 *
 * reiter.cycleN(2, [1, 2, 3])
 * // => 1, 2, 3, 1, 2, 3
 */
function* cycleN(n, iterable) {
  if (n === 0) return;
  const saved = [];
  for (const value of iterable) {
    yield value;
    saved.push(value);
  }
  for (let i = 1; i < n; i++) {
    yield* saved;
  }
}

export default curry(cycleN);
