import hasOwnProperty from "./internal/hasOwnProperty.js";

/**
 * Yields `[key, value]` pairs for each own, enumerable property in `object`.
 *
 * @since 0.0.1
 * @curried
 * @param {Object} object The object
 * @returns {Iterator} The own, enumerable property pairs of `object`.
 * @example
 *
 * reiter.toPairs({a: 1, b: 2, c: 3})
 * // => ["a", 1], ["b", 2], ["c", 3]
 */
export default function* toPairs(object) {
  for (const key in object) {
    if (hasOwnProperty(object, key)) {
      yield [key, object[key]];
    }
  }
}
