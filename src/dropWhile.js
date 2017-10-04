/** @module reiter/dropWhile */

import curry from "__curry__";
import iter from "./iter.js";

/**
 * Drops values from the beginning of `iterable` until `predicate` returns
 * a falsey value. `predicate` is invoked with one argument: (value).
 *
 * @since 0.0.1
 * @generator
 * @function dropWhile
 * @param {function} predicate Invoked per value.
 * @param {ForOfIterable} iterable The iterable.
 * @yields {*} The next value not dropped by `predicate`.
 * @see [dropUntil]{@link module:reiter/dropUntil}
 * @example
 *
 * reiter.dropWhile(x => x > 0, [1, 2, 0, -1, 1, 3])
 * // => 0, -1, 1, 3
 */
export default curry(function*(predicate, iterable) {
  const iterator = iter(iterable);
  for (const value of iterator) {
    if (!predicate(value)) {
      yield value;
      break;
    }
  }
  yield* iterator;
});
