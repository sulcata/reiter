import curry from "__curry__";
import iter from "./iter.js";

/**
 * Computes the minimum value of `iterable`. Finds the first minimal
 * value by comparing with `comparator`. Returns `undefined` if `iterable`
 * is empty. `comparator` takes two arguments and returns positive if
 * `a > b`, negative if `a < b`, and 0 if `a === b`: (a, b).
 *
 * @since 0.0.1
 * @curried
 * @param {function} comparator Determines the order of two values.
 * @param {Iterable|Iterator} iterable The iterable.
 * @return {*} The first minimal value.
 * @example
 *
 * reiter.minWith((a, b) => b - a, [1, 2, 3, -4, 3, 1])
 * // => 3
 */
const minWith = (comparator, iterable) => {
  const iterator = iter(iterable);
  const { done, value } = iterator.next();
  if (done) return undefined;
  let min = value;
  for (const value of iterator) {
    if (comparator(value, min) < 0) {
      min = value;
    }
  }
  return min;
};

export default curry(minWith);
