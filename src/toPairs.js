/** @module reiter/toPairs */

import hasOwnProperty from "./internal/hasOwnProperty.js";

/**
 * Yields `[key, value]` pairs for each own, enumerable property in `object`.
 * Pairs will be yielded in the same order as the `for..in` loop.
 *
 * @since 0.0.1
 * @generator
 * @function toPairs
 * @param {Object} object The object
 * @yields {Array<string, *>} The next property pair of `object`.
 * @see [fromPairs]{@link module:reiter/fromPairs}
 * @example
 *
 * reiter.toPairs({a: 1, b: 2, c: 3})
 * // => ["a", 1], ["b", 2], ["c", 3]
 */
export default function*(object) {
  for (const key in object) {
    if (hasOwnProperty(object, key)) {
      yield [key, object[key]];
    }
  }
}
