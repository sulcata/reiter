import curry from "__curry__";
import iter from "./iter.js";

/**
 * Computes the minimum value of `iterable`. Uses the first minimal value by
 * using the iteratee on each value to generate the ranking criteria. Returns
 * `undefined` if `iterable` is empty. `iteratee` takes one argument: (value).
 *
 * @since 0.0.1
 * @curried
 * @param {function} iteratee Invoked per value.
 * @param {Iterable|Iterator} iterable The iterable.
 * @return {*} The first minimal value.
 * @example
 *
 * reiter.minBy(Math.abs, [1, 2, 3, -4, 3, 1])
 * // => 1
 */
const minBy = (iteratee, iterable) => {
  const iterator = iter(iterable);
  const { done, value } = iterator.next();
  if (done) return undefined;
  let min = value;
  let iterateeMin = iteratee(min);
  for (const value of iterator) {
    const iterateeValue = iteratee(value);
    if (iterateeValue < iterateeMin) {
      min = value;
      iterateeMin = iterateeValue;
    }
  }
  return min;
};

export default curry(minBy);
