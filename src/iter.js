/**
 * Casts value to an iterator.
 *
 * @since 0.0.1
 * @curried
 * @param {*} value The value to check for inclusion.
 * @returns {boolean} `true` if `value` is iterable or if it is iterator-like, else `false`.
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
  typeof value.next === "function" ? value : value[Symbol.iterator]();
