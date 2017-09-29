import curry from "__curry__";
import iter from "./iter.js";

/**
 * Accumulates the values of `iterable`, yielding the accumulation after each
 * step. `iteratee` is invoked with two arguments: (accumulator, value).
 *
 * @since 0.0.1
 * @curried
 * @param {function} iteratee The function which accumulates the iterable.
 * @param {Iterable|Iterator} iterable The iterable.
 * @returns {Iterator} The accumulated values.
 * @example
 *
 * reiter.accumulate((a, b) => a + b, [1, 2, 3, 4, 5])
 * // => 1, 3, 6, 10, 15
 */
function* accumulate(iteratee, iterable) {
  const iterator = iter(iterable);
  const { done, value } = iterator.next();
  if (done) return;
  let accumulator = value;
  yield accumulator;
  for (const value of iterator) {
    accumulator = iteratee(accumulator, value);
    yield accumulator;
  }
}

export default curry(accumulate);
