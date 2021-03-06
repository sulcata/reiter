/** @module reiter/isIterable */

/**
 * Checks if `value` is iterable or if it is iterator-like.
 *
 * @since 0.0.1
 * @function isIterable
 * @param {*} value The value to check for inclusion.
 * @returns {boolean} `true` if `value` is iterable or if it is iterator-like.
 * @example
 *
 * reiter.isIterable("abc")
 * // => true
 *
 * reiter.isIterable([1, 2, 3])
 * // => true
 *
 * reiter.isIterable(reiter.iter([1, 2, 3]))
 * // => true
 *
 * reiter.isIterable({})
 * // => false
 *
 * reiter.isIterable(null)
 * // => false
 *
 * reiter.isIterable(undefined)
 * // => false
 */
export default value =>
  value != null &&
  (typeof value[Symbol.iterator] === "function" ||
    typeof value.next === "function");
