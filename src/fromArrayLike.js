/** @module reiter/fromArrayLike */

/**
 * Yields the values from a given array-like object,
 * from `0` to `arrayLike.length`.
 *
 * @since 0.0.2
 * @function fromArrayLike
 * @param {ArrayLike} arrayLike The array-like object.
 * @yields {*} The next value of `arrayLike`.
 * @example
 *
 * reiter.fromArrayLike({length: 3, 0: 1, 1: 2, 2: 3})
 * // => 1, 2, 3
 */
export default function*(arrayLike) {
  for (let i = 0, length = arrayLike.length; i < length; i++) {
    yield arrayLike[i];
  }
}
