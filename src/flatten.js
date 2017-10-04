/** @module reiter/flatten */

import flattenDepth from "./flattenDepth.js";

/**
 * Flattens `iterable` one level deep.
 *
 * @since 0.0.1
 * @generator
 * @function flatten
 * @param {ForOfIterable} iterable The iterable.
 * @yields {*} The next element when traversing a once flattened `iterable`.
 * @see [flattenDeep]{@link module:reiter/flattenDeep}
 * @see [flattenDepth]{@link module:reiter/flattenDepth}
 * @example
 *
 * reiter.flatten([1, [2], [3, [4]], [5, 6]])
 * // => 1, 2, 3, [4], 5, 6
 */
export default flattenDepth(1);
