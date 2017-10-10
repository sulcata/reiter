/** @module reiter/compact */

import identity from "./internal/identity.js";
import filter from "./filter.js";

/**
 * Yields only the truthy values in `iterable`.
 *
 * @since 0.0.4
 * @generator
 * @function compact
 * @param {ForOfIterable} iterable The iterable.
 * @yields {*} The next truthy value.
 * @example
 *
 * reiter.compact([0, 1, null, [], {}])
 * // => 1, [], {}
 */
export default filter(identity);
