/** @module reiter/takeWhile */

import curry from "__curry__";
import iter from "./iter.js";

/**
 * Takes values from the beginning of `iterable` until `predicate` returns
 * a falsey value. `predicate` is invoked with one argument: (value).
 *
 * @since 0.0.4
 * @generator
 * @function takeWhile
 * @param {function} predicate Invoked per value.
 * @param {ForOfIterable} iterable The iterable.
 * @yields {*} The next value taken from `iterable` by `predicate`.
 * @see [take]{@link module:reiter/take}
 * @see [takeUntil]{@link module:reiter/takeUntil}
 * @example
 *
 * reiter.takeWhile(x => x > 0, [1, 2, 0, -1, 1, 3])
 * // => 1, 2
 */
export default curry(function*(predicate, iterable) {
  const iterator = iter(iterable);
  for (const value of iterator) {
    if (!predicate(value)) break;
    yield value;
  }
});
