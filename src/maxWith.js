import curry from "__curry__";
import iter from "./iter.js";

/**
 * Computes the maximum value of `iterable`. Finds the first maximal
 * value by comparing with `comparator`. Returns `undefined` if `iterable`
 * is empty. `comparator` takes two arguments and returns positive if
 * `a > b`, negative if `a < b`, and 0 if `a === b`: (a, b).
 *
 * @since 0.0.1
 * @curried
 * @param {function} comparator Determines the order of two values.
 * @param {Iterable|Iterator} iterable The iterable.
 * @return {*} The first maximal value.
 * @example
 *
 * reiter.maxWith((a, b) => b - a, [1, 2, 3, -4, 3, 1])
 * // => -4
 */
const maxWith = (comparator, iterable) => {
  const iterator = iter(iterable);
  const { done, value } = iterator.next();
  if (done) return undefined;
  let max = value;
  for (const value of iterator) {
    if (comparator(value, max) > 0) {
      max = value;
    }
  }
  return max;
};

export default curry(maxWith);
