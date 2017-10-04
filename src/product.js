/** @module reiter/product */

import reduceInto from "./reduceInto.js";

/**
 * Finds the product of every number in `iterable`. The empty product is 1.
 *
 * @since 0.0.1
 * @function product
 * @param {ForOfIterable<number>} iterable The iterable of numbers.
 * @returns {number} The product.
 * @see [sum]{@link module:reiter/sum}
 * @example
 *
 * reiter.product([1, 2, 3, 4])
 * // => 24
 *
 * reiter.product([])
 * // => 1
 */
export default reduceInto((a, b) => a * b, 1);
