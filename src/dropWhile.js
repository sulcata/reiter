import curry from "__curry__";
import iter from "./iter.js";

/**
 * Drops values from the beginning of `iterable` until `predicate` returns
 * a falsey value. `predicate` is invoked with one argument: (value).
 *
 * @since 0.0.1
 * @curried
 * @param {function} predicate Invoked per value.
 * @param {Iterable|Iterator} iterable The iterable.
 * @returns {Iterator} `iterable` with values dropped according to `predicate`.
 * @example
 *
 * reiter.dropWhile(x => x > 0, [1, 2, 0, -1, 1, 3])
 * // => 0, -1, 1, 3
 */
function* dropWhile(predicate, iterable) {
  const iterator = iter(iterable);
  for (const value of iterator) {
    if (!predicate(value)) {
      yield value;
      break;
    }
  }
  yield* iterator;
}

export default curry(dropWhile);
