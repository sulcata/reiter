import negate from "./internal/negate.js";
import filter from "./filter.js";

/**
 * Skips all values in `iterable` for which predicate returns a truthy value.
 * `predicate` takes one argument: (value)
 *
 * @since 0.0.1
 * @curried
 * @param {function} predicate Invoked per value.
 * @param {Iterable} iterable The iterable.
 * @returns {Iterator} `iterable` with values removed according to `predicate`.
 * @example
 *
 * reiter.reject(n => n % 2, [1, 2, 3, 4])
 * // => 2, 4
 */
export default function* reject(predicate, iterable) {
  yield* filter(negate(predicate), iterable);
}
