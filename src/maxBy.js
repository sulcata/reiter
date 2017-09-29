import curry from "__curry__";
import iter from "./iter.js";

/**
 * Computes the maximum value of `iterable`. Uses the first maximal value by
 * using the iteratee on each value to generate the ranking criteria.
 * `iteratee` takes one argument: (value).
 *
 * @since 0.0.1
 * @param {function} iteratee Invoked per value.
 * @param {Iterable|Iterator} iterable The iterable.
 * @return {*} The first maximal value.
 * @example
 *
 * reiter.maxBy(Math.abs, [1, 2, 3, -4, 3, 1])
 * // => -4
 */
const maxBy = (iteratee, iterable) => {
  const iterator = iter(iterable);
  const { done, value } = iterator.next();
  if (done) return undefined;
  let max = value;
  let iterateeMax = iteratee(max);
  for (const value of iterator) {
    const iterateeValue = iteratee(value);
    if (iterateeValue > iterateeMax) {
      max = value;
      iterateeMax = iterateeValue;
    }
  }
  return max;
};

export default curry(maxBy);
