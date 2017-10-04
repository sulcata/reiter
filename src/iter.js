/** @module reiter/iter */

/**
 * Casts `value` to an iterator if possible.
 *
 * @since 0.0.1
 * @function iter
 * @param {ForOfIterable} value The value to cast to an iterator.
 * @returns {Iterator} The value cast as an iterator.
 * @example
 *
 * const iterator = reiter.iter([1, 2, 3])
 *
 * iterator
 * // => <Iterator>
 *
 * reiter.iter(iterator) === iterator
 * // => true
 */
export default value =>
  typeof value.next === "function" ? value : value[Symbol.iterator]();
