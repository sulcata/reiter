/** @module reiter/slice */

import curry from "__curry__";
import advance from "./internal/advance.js";
import iter from "./iter.js";
import next from "./next.js";

/**
 * Yields a slice of `iterable` from `start` (inclusive) to `stop` (exclusive)
 * with steps of size `step`. `step` must be positive and `stop == null` can
 * be used as shorthand for `stop === Infinity`.
 *
 * @since 0.0.1
 * @generator
 * @function slice
 * @param {number} start The order of the first value of the slice.
 * @param {?number} stop The order of the value that the slice stops before.
 * @param {number} step The step by which to count.
 * @param {ForOfIterable} iterable The iterable.
 * @yields {*} The value in the slice.
 * @example
 *
 * reiter.slice(0, 10, 3, count(0, 1))
 * // => 0, 3, 6, 9
 */
export default curry(function*(start, stop, step, iterable) {
  if (stop == null) stop = Infinity;
  const iterator = iter(iterable);
  advance(iterator, start);
  for (let current = start; current < stop; current += step) {
    const { done, value } = next(iterator);
    if (done) break;
    yield value;
    if (step > 1 && advance(iterator, step - 1).done) break;
  }
});
