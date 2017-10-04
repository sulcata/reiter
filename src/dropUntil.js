/** @module reiter/dropUntil */

import curry from "__curry__";
import negate from "./internal/negate.js";
import dropWhile from "./dropWhile.js";

/**
 * Drops values from the beginning of `iterable` until `predicate` returns
 * a truthy value. `predicate` is invoked with one argument: (value).
 *
 * @since 0.0.1
 * @generator
 * @function dropUntil
 * @param {function} predicate Invoked per value.
 * @param {ForOfIterable} iterable The iterable.
 * @yields {*} The next value not dropped by `predicate`.
 * @see [dropWhile]{@link module:reiter/dropWhile}
 * @example
 *
 * reiter.dropUntil(x => x > 0, [-1, 0, 1, 2, -1, 3])
 * // => 1, 2, -1, 3
 */
export default curry((predicate, iterable) =>
  dropWhile(negate(predicate), iterable)
);
