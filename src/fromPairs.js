/** @module reiter/fromPairs */

/**
 * Constructs an object from `[key, value]` pairs in `pairs`.
 *
 * @since 0.0.1
 * @function fromPairs
 * @param {ForOfIterable} pairs The pairs.
 * @returns {Object} The constructed object.
 * @see [toPairs]{@link module:reiter/toPairs}
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
