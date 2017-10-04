/** @module reiter/max */

import identity from "./internal/identity.js";
import maxBy from "./maxBy.js";

/**
 * Computes the maximum value of `iterable`. Uses the first maximal value.
 * Returns `undefined` if `iterable` is empty.
 *
 * @since 0.0.1
 * @function max
 * @param {ForOfIterable} iterable The iterable.
 * @returns {*} The first maximal value.
 * @see [maxBy]{@link module:reiter/maxBy}
 * @see [maxWith]{@link module:reiter/maxWith}
 * @example
 *
 * reiter.max([1, 2, 3, -4, 3, 1])
 * // => 3
 */
export default maxBy(identity);
