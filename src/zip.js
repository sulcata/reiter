/** @module reiter/zip */

import curry from "__curry__";
import unzip from "./unzip.js";

/**
 * Zips two iterables together. Yields the the first element of `iterable1`
 * and the first element of `iterable2` as an array, then the second elements,
 * and so on. Ceases once `iterable1` or `iterable2` is exhausted.
 *
 * @since 0.0.1
 * @generator
 * @function zip
 * @param {ForOfIterable} iterable1 The first iterable.
 * @param {ForOfIterable} iterable2 The second iterable.
 * @yields {Iterator} The next set of regrouped elements.
 * @see [unzip]{@link module:reiter/unzip}
 * @example
 *
 * reiter.zip("abc", [1, 2, 3])
 * // => ["a", 1], ["b", 2], ["c", 3]
 *
 * reiter.zip("abc", [1, 2, 3, 4])
 * // => ["a", 1], ["b", 2], ["c", 3]
 */
export default curry((iterable1, iterable2) => unzip([iterable1, iterable2]));
