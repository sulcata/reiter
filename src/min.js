/** @module reiter/min */

import identity from "./internal/identity.js";
import minBy from "./minBy.js";

/**
 * Computes the minimum value of `iterable`. Uses the first minimal value.
 * Returns `undefined` if `iterable` is empty.
 *
 * @since 0.0.1
 * @function min
 * @param {ForOfIterable} iterable The iterable.
 * @returns {*} The first minimal value.
 * @see [minBy]{@link module:reiter/minBy}
 * @see [minWith]{@link module:reiter/minWith}
 * @example
 *
 * reiter.min([1, 2, 3, -4, 3, 1])
 * // => 1
 */
export default minBy(identity);
