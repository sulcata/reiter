import curry from "__curry__";

/**
 * Appends `value` to the end of `iterable`.
 *
 * @since 0.0.1
 * @curried
 * @param {*} value The value to be appended.
 * @param {Iterable|Iterator} iterable The iterable.
 * @returns {Iterator} `iterable` with `value` appended.
 * @example
 *
 * reiter.append(4, [1, 2, 3])
 * // => 1, 2, 3, 4
 */
function* append(value, iterable) {
  yield* iterable;
  yield value;
}

export default curry(append);
