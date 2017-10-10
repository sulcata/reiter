/** @module reiter/nth */

import curry from "__curry__";
import advance from "./internal/advance.js";
import iter from "./iter.js";

/**
 * Returns the nth value from `iterable`. The first value is treated
 * as the 0th.
 *
 * @since 0.0.4
 * @generator
 * @function nth
 * @param {number} n The order of the value in `iterable`.
 * @param {ForOfIterable} iterable The iterable.
 * @returns {*} The nth value in `iterable`.
 * @example
 *
 * reiter.nth(2, [1, 2, 3, 4, 5])
 * // => 3
 */
export default curry((n, iterable) => advance(iter(iterable), n + 1).value);
