/** @module reiter/range */

import curry from "__curry__";

/**
 * Yields a list of numbers counting from `start` (inclusive) to `end`
 * (exclusive) by `step`. `step` can be negative.
 *
 * @since 0.0.1
 * @generator
 * @function range
 * @param {number} start The first number yielded.
 * @param {number} stop The number that the sequence stops before.
 * @param {number} step The step by which to count.
 * @yields {number} The next number in the sequence.
 * @example
 *
 * reiter.range(0, 10, 2)
 * // => 0, 2, 4, 6, 8
 */
export default curry(function*(start, stop, step) {
  if (step > 0) {
    for (let current = start; current < stop; current += step) {
      yield current;
    }
  } else if (step < 0) {
    // eslint-disable-next-line for-direction
    for (let current = start; current > stop; current += step) {
      yield current;
    }
  }
});
