/** @module reiter/reject */

import negate from "./internal/negate.js";
import filter from "./filter.js";

/**
 * Skips all values in `iterable` for which predicate returns a truthy value.
 * `predicate` is invoked with one argument: (value).
 *
 * @since 0.0.1
 * @generator
 * @function reject
 * @param {function} predicate Invoked per value.
 * @param {ForOfIterable} iterable The iterable.
 * @yields {*} The next value not passing `predicate`.
 * @see [filter]{@link module:reiter/filter}
 * @example
 *
 * reiter.reject(n => n % 2, [1, 2, 3, 4])
 * // => 2, 4
 */
export default (predicate, iterable) => filter(negate(predicate), iterable);
