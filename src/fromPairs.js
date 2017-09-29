/**
 * Constructs an object from `[key, value]` pairs in `pairs`.
 *
 * @since 0.0.1
 * @curried
 * @param {Iterable|Iterator} pairs The pairs.
 * @returns {Object} The constructed object.
 * @example
 *
 * reiter.fromPairs([["a", 1], ["b", 2], ["c", 3]])
 * // => {a: 1, b: 2, c: 3}
 */
export default pairs => {
  const object = {};
  for (const [key, value] of pairs) {
    object[key] = value;
  }
  return object;
};
