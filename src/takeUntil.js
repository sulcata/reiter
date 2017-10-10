/** @module reiter/takeUntil */

import curry from "__curry__";
import negate from "./internal/negate.js";
import takeWhile from "./takeWhile.js";

/**
 * Takes values from the beginning of `iterable` until `predicate` returns
 * a truthy value. `predicate` is invoked with one argument: (value).
 *
 * @since 0.0.4
 * @generator
 * @function takeUntil
 * @param {function} predicate Invoked per value.
 * @param {ForOfIterable} iterable The iterable.
 * @yields {*} The next value taken from `iterable` by `predicate`.
 * @see [take]{@link module:reiter/take}
 * @see [takeWhile]{@link module:reiter/takeWhile}
 * @example
 *
 * reiter.takeUntil(x => x > 0, [-1, -2, 0, 1, 2, -1, 3])
 * // => -1, -2, 0
 */
export default curry((predicate, iterable) =>
  takeWhile(negate(predicate), iterable)
);
