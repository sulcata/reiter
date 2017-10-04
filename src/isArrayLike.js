/** @module reiter/isArrayLike */

/**
 * Checks `value` to see if it seems to be an array-like object. An object
 * is array-like if it has a safe, non-negative, integral `length` property.
 *
 * @since 0.0.2
 * @function isArrayLike
 * @param {*} value The value to test for array-likeness.
 * @returns {*} `true` if `value` is array-like.
 * @example
 *
 * reiter.isArrayLike({length: 3, 0: 1, 1: 2, 2: 3})
 * // => true
 *
 * reiter.isArrayLike({length: 0})
 * // => true
 *
 * reiter.isArrayLike({length: 2 * Number.MAX_SAFE_INTEGER})
 * // => false
 *
 * reiter.isArrayLike({length: -1})
 * // => false
 *
 * reiter.isArrayLike({length: 4.2})
 * // => false
 *
 * reiter.isArrayLike({length: "10"})
 * // => false
 *
 * reiter.isArrayLike((a, b) => a + b)
 * // => false
 *
 * reiter.isArrayLike({0: 1, 1: 2, 2: 3})
 * // => false
 */
export default value =>
  value != null &&
  typeof value !== "function" &&
  value.length >= 0 &&
  Number.isSafeInteger(value.length);
