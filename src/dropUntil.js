import curry from "__curry__";
import negate from "./internal/negate.js";
import dropWhile from "./dropWhile.js";

/**
 * Drops values from the beginning of `iterable` until `predicate` returns
 * a truthy value. `predicate` is invoked with one argument: (value).
 *
 * @since 0.0.1
 * @curried
 * @param {function} predicate Invoked per value.
 * @param {Iterable|Iterator} iterable The iterable.
 * @returns {Iterator} `iterable` with values dropped according to `predicate`.
 * @example
 *
 * reiter.dropUntil(x => x > 0, [-1, 0, 1, 2, -1, 3])
 * // => 1, 2, -1, 3
 */
const dropUntil = (predicate, iterable) =>
  dropWhile(negate(predicate), iterable);

export default curry(dropUntil);
