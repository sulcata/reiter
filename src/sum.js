/** @module reiter/sum */

import reduceInto from "./reduceInto.js";

/**
 * Finds the sum of every number in `iterable`. The empty sum is 0.
 *
 * @since 0.0.1
 * @function sum
 * @param {ForOfIterable<number>} iterable The iterable of numbers.
 * @returns {number} The sum.
 * @see [product]{@link module:reiter/product}
 * @example
 *
 * reiter.sum([1, 2, 3, 4])
 * // => 10
 *
 * reiter.sum([])
 * // => 0
 */
export default reduceInto((a, b) => a + b, 0);
