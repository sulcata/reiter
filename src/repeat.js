/** @module reiter/repeat */

import repeatN from "./repeatN.js";

/**
 * Yields `value` repeated infinitely.
 *
 * @since 0.0.1
 * @generator
 * @function repeat
 * @param {*} value The value.
 * @yields {*} `value`.
 * @see [repeatN]{@link module:reiter/repeatN}
 * @example
 *
 * reiter.repeat(1)
 * // => 1, 1, 1, ...
 */
export default repeatN(Infinity);
