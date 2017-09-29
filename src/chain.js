import curry from "__curry__";

/**
 * Chains `iterable1` and `iterable2` together.
 *
 * @since 0.0.1
 * @curried
 * @param {Iterable|Iterator} iterable1 The iterable at the beginning.
 * @param {Iterable|Iterator} iterable2 The iterable on the end.
 * @returns {Iterator} `iterable1` followed by `iterable2`.
 * @example
 *
 * reiter.chain([1, 2], [3, 4])
 * // => 1, 2, 3, 4
 */
function* chain(iterable1, iterable2) {
  yield* iterable1;
  yield* iterable2;
}

export default curry(chain);
