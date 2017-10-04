/** @module reiter/flattenDeep */

import flattenDepth from "./flattenDepth.js";

/**
 * Recursively flattens `iterable`.
 *
 * @since 0.0.1
 * @generator
 * @function flattenDeep
 * @param {ForOfIterable} iterable The iterable.
 * @yields {*} The next element when traversing a fully flattened `iterable`.
 * @see [flatten]{@link module:reiter/flatten}
 * @see [flattenDepth]{@link module:reiter/flattenDepth}
 * @example
 *
 * reiter.flattenDeep([1, [2], [3, [[[4]]]], [5, 6]])
 * // => 1, 2, 3, 4, 5, 6
 */
export default flattenDepth(Infinity);
